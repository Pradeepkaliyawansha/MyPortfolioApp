import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterLinkActive, RouterOutlet, RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css", "/src/styles.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  dynamicText: string = "";
  phrases: string[] = [
    "Team Player.",
    "Full Stack Developer.",
    "Code Enthusiast.",
    "Quick Learner.",
  ];

  currentPhraseIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 100;
  deletingSpeed: number = 100;
  delayBetweenPhrases: number = 2000;

  // Responsive properties
  isMobile: boolean = false;
  isTablet: boolean = false;
  isDesktop: boolean = false;

  private typingTimeout: any;
  private resizeTimeout: any;

  constructor(private titleService: Title) {
    this.titleService.setTitle("Pradeep Kaliyawansha | Full Stack Developer");
  }

  ngOnInit(): void {
    this.checkScreenSize();
    this.adjustPhrasesForScreen();
    this.type();

    // Add meta tags for better SEO and responsiveness
    this.addMetaTags();
  }

  ngOnDestroy(): void {
    if (this.typingTimeout) {
      clearTimeout(this.typingTimeout);
    }
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    // Debounce resize events
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }

    this.resizeTimeout = setTimeout(() => {
      this.checkScreenSize();
      this.adjustPhrasesForScreen();
    }, 150);
  }

  private checkScreenSize(): void {
    const width = window.innerWidth;
    this.isMobile = width < 768;
    this.isTablet = width >= 768 && width < 1024;
    this.isDesktop = width >= 1024;
  }

  private adjustPhrasesForScreen(): void {
    if (this.isMobile) {
      this.phrases = [
        "Developer.",
        "Team Player.",
        "Quick Learner.",
        "Problem Solver.",
      ];
      this.typingSpeed = 120;
      this.deletingSpeed = 80;
      this.delayBetweenPhrases = 1500;
    } else if (this.isTablet) {
      this.phrases = [
        "Full Stack Developer.",
        "Team Player.",
        "Code Enthusiast.",
        "Quick Learner.",
      ];
      this.typingSpeed = 110;
      this.deletingSpeed = 90;
      this.delayBetweenPhrases = 1800;
    } else {
      this.phrases = [
        "Team Player.",
        "Full Stack Developer.",
        "Code Enthusiast.",
        "Quick Learner.",
        "Problem Solver.",
      ];
      this.typingSpeed = 100;
      this.deletingSpeed = 100;
      this.delayBetweenPhrases = 2000;
    }
  }

  type() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];

    if (this.isDeleting) {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
      this.isDeleting = true;
      this.typingTimeout = setTimeout(
        () => this.type(),
        this.delayBetweenPhrases
      );
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentPhraseIndex =
        (this.currentPhraseIndex + 1) % this.phrases.length;
      this.typingTimeout = setTimeout(() => this.type(), 500);
    } else {
      const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
      this.typingTimeout = setTimeout(() => this.type(), speed);
    }
  }

  openPDF() {
    const pdfUrl =
      "../../assets/Associate Software Engineer_CV_Pradeep KaliyawanshaPradeep.pdf";

    // Check if mobile device
    if (this.isMobile) {
      // For mobile, try to download directly
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Pradeep_Kaliyawansha_Resume.pdf";
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      // Fallback for mobile browsers
      if (link.download !== undefined) {
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(pdfUrl, "_blank", "noopener,noreferrer");
      }
    } else {
      window.open(pdfUrl, "_blank", "noopener,noreferrer");
    }
  }

  private addMetaTags(): void {
    // Add responsive meta tags if they don't exist
    if (!document.querySelector('meta[name="viewport"]')) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1.0, maximum-scale=5.0";
      document.getElementsByTagName("head")[0].appendChild(meta);
    }

    // Add theme color for mobile browsers
    if (!document.querySelector('meta[name="theme-color"]')) {
      const themeMeta = document.createElement("meta");
      themeMeta.name = "theme-color";
      themeMeta.content = "#141a20";
      document.getElementsByTagName("head")[0].appendChild(themeMeta);
    }

    // Add description meta tag
    if (!document.querySelector('meta[name="description"]')) {
      const descMeta = document.createElement("meta");
      descMeta.name = "description";
      descMeta.content =
        "Pradeep Kaliyawansha - Full Stack Developer specializing in Angular, React, Node.js, and modern web technologies. Creating innovative digital solutions.";
      document.getElementsByTagName("head")[0].appendChild(descMeta);
    }
  }

  // Utility methods for template
  get screenSizeClass(): string {
    if (this.isMobile) return "mobile";
    if (this.isTablet) return "tablet";
    return "desktop";
  }

  // Performance optimization for change detection
  trackByFn(index: number): number {
    return index;
  }
}
