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
      name: "Automated Attendant System ",
      summary:
        "Python based desktop application for recording attendance using face recognition and generate daily and monthly reports.",
      projectLink:
        "https://github.com/Pradeepkaliyawansha/Automated_Attendance_System",
      tags: [Tag.PYTHON, Tag.PIP, Tag.PANDAS, Tag.OPENCV, Tag.TKINTER],
    },
    {
      id: 2,
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
      id: 3,
      name: "Online Parking Booking System",
      summary:
        "Parking booking system for vehicle owners and Parking owners access different features. This is my 3rd Year undergraduate mini project.",
      projectLink:
        "https://github.com/Pradeepkaliyawansha/Online_Parking_Booking_System",
      tags: [Tag.REACT, Tag.EXPRESS, Tag.NODE, Tag.MONGO],
    },
    {
      id: 4,
      name: "My Portfolio Web App",
      summary:
        "This portfolio app showcases my skills, projects, and experience in software engineering. Built with a responsive and user-friendly design, it highlights my technical expertise, including proficiency in web development and project management. ",
      projectLink: "https://github.com/Pradeepkaliyawansha/MyPortfolioApp",
      tags: [Tag.ANGULAR, Tag.BOOTSTRAP],
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
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle("Portfolio");
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }
}
