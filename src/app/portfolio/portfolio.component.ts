import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { CardComponent } from "../card/card.component";
import { Card } from "../_models/card";
import { Tag } from "../_models/tags";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./portfolio.component.html",
  styleUrl: "./portfolio.component.css",
  providers: [],
})
export class PortfolioComponent {
  projects: Card[] = [
    {
      id: 1,
      name: "Online Parking Booking System",
      summary:
        "Parking booking system for vehicle owners and Parking owners access different features. This is my 3rd Year undergraduate mini project.",
      projectLink:
        "https://github.com/Pradeepkaliyawansha/Online_Parking_Booking_System",
      tags: [Tag.REACT, Tag.EXPRESS, Tag.NODE, Tag.MONGO],
    },
    {
      id: 2,
      name: "Automated Attendant System ",
      summary:
        "Python based desktop application for recording attendance using face recognition and generate daily and monthly reports.",
      projectLink:
        "https://github.com/Pradeepkaliyawansha/Automated_Attendance_System",
      tags: [Tag.PYTHON, Tag.PIP, Tag.PANDAS, Tag.OPENCV, Tag.TKINTER],
    },
    {
      id: 3,
      name: "My Portfolio Web App",
      summary:
        "This portfolio app showcases my skills, projects, and experience in software engineering. Built with a responsive and user-friendly design, it highlights my technical expertise, including proficiency in web development and project management. ",
      projectLink: "https://github.com/Pradeepkaliyawansha/MyPortfolioApp",
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP],
    },
    {
      id: 4,
      name: "Exam Management System",
      summary:
        "This Exam Management System is a full-stack web application built with React.js, Node.js, Express, and MongoDB that streamlines online examination processes for educational institutions. The system features role-based access control with separate dashboards for administrators and students - admins can create and manage exams with multiple-choice quizzes, monitor student performance, and view analytics, while students can take timed exams, receive real-time notifications, and download PDF certificates of their results. Key technical features include JWT authentication, responsive Tailwind CSS design, automated grading, secure API endpoints, and comprehensive error handling, making it an ideal solution for schools and training organizations looking to digitize their examination workflow with features like live notifications, detailed performance tracking, and mobile-friendly interfaces.",
      projectLink:
        "https://github.com/Pradeepkaliyawansha/Exam-management-system",
      tags: [Tag.REACT, Tag.EXPRESS, Tag.NODE, Tag.MONGO, Tag.TAILWIND],
    },
    {
      id: 5,
      name: "Music Recommendation System by using the OCEAN Model to Predict User Preferences",
      summary:
        "This is my final year research project. We create connection between music genres and the personality traits based on the OCEAN model. We create a system to music genre classification using music features of the songs and recommend music according to music preferences of different personalities.",
      projectLink: "",
      tags: [Tag.PYTHON, Tag.KMEANS, Tag.RANDOM, Tag.EUCLIDEAN],
    },
    {
      id: 6,
      name: "Currency Convert App",
      summary:
        "React Based currency convert app enables to users convert currency to another currency since today. Using exchange convert API for the get convert rates. We can get all currency rates selecting dates in past as well. ",
      projectLink: "https://github.com/Pradeepkaliyawansha/Currency_app",
      tags: [Tag.REACT, Tag.NODE, Tag.EXPRESS, Tag.TAILWIND],
    },
    {
      id: 7,
      name: "Dynamic Widgets Dashboard",
      summary:
        "React Based frontend customizable data visualizing dashboard with dynamic widgets enables to resize, edit add and delete widgets with theme selection.",
      projectLink:
        "https://github.com/Pradeepkaliyawansha/Dynamic_widget_dashboard",
      tags: [Tag.REACT, Tag.TAILWIND],
    },
    {
      id: 8,
      name: "Food Ordering Web",
      summary:
        "Website development for a food cafe allowing the users to order food items with features such as add to cart, customize menu items and online payment. This was a group project where I contributed in the development of the cart option and payment gateway.",
      projectLink:
        "https://github.com/Pradeepkaliyawansha/food-Odering-web-PHP-Project",
      tags: [
        Tag.HTML5,
        Tag.CSS3,
        Tag.JAVASCRIPT,
        Tag.BOOTSTRAP,
        Tag.JQUARY,
        Tag.PHP,
        Tag.MYSQL,
      ],
    },
    {
      id: 9,
      name: "Email Template Generator AI-Powered",
      summary:
        "The Email Template Builder is an innovative web application that simplifies email marketing by combining artificial intelligence with intuitive design tools. Users can instantly generate professional email templates by simply describing their needs in natural language, letting the AI handle the creative heavy lifting, or they can build custom designs from scratch using the streamlined editor. The platform features a clean, responsive interface that works seamlessly across devices, with separate tabs for AI-assisted creation and manual design. With automatic template saving and easy access to previous designs, marketers and business professionals can create compelling email campaigns in minutes rather than hours, eliminating the need for specialized design skills or lengthy template development processes. This tool empowers users to produce consistently polished email communications that maintain brand integrity while significantly reducing production time.",
      projectLink:
        "https://github.com/Pradeepkaliyawansha/AI-powered-email-generator",
      tags: [Tag.NEXT, Tag.TYPESCRIPT, Tag.TAILWIND],
    },
    {
      id: 10,
      name: "Smart Inventory and Sales Management System",
      summary:
        "A full-stack web application built with Angular (frontend), .NET (backend), and SQL Server (database) to streamline inventory tracking and sales operations. The system enables businesses to manage products, monitor stock levels, record sales transactions, generate reports, and ensure real-time data synchronization across modules. Designed for efficiency, scalability, and ease of use, it helps improve decision-making and operational control.",
      projectLink:
        "https://github.com/Pradeepkaliyawansha/Smart-Inventory-Sales-Management-system",
      tags: [Tag.ANGULAR, Tag.DOTNET, Tag.SQL],
    },
    {
      id: 10,
      name: "E-commerce web app",
      summary:
        "This E-Shop project is a comprehensive full-stack e-commerce application that showcases modern web development practices. It features a clean separation between buyer and seller experiences, with a robust product management system, shopping cart functionality, and order tracking. The application uses contemporary technologies like React with Context API for state management, Tailwind CSS for responsive styling with dark mode support, and a Node.js backend with MongoDB for data persistence.",
      projectLink: "https://github.com/Pradeepkaliyawansha/e-commerce",
      tags: [Tag.REACT, Tag.EXPRESS, Tag.NODE, Tag.MONGO, Tag.TAILWIND],
    },
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle("Portfolio");
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }
}
