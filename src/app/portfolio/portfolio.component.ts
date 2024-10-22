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
      name: "The Casino API",
      summary:
        "This is a Python-based REST API using FastAPI and PostgreSQL for managing casino transactions and player operations. The project uses Pydantic, SQLAlchemy, Psycopg2. It also has e2e, integration and unit tests - all developed with Pytest. The deployment utilizes Dockerfiles and Docker Compose.",
      description:
        "This project is a REST API designed to simulate services for casino users. The main goal was to create a backend system that manages player information, balances, and transactions in a virtual casino environment. The API provides various endpoints to manage players, balances, and transactions. These include creating, retrieving, updating, and deleting players; retrieving player balances; creating new bets; registering wins; rolling back transactions; and retrieving the transaction history of specific players. Additional endpoints are available for managing individual transactions. The API was developed using Python and the FastAPI framework, chosen for its speed and modern features. PostgreSQL was used as the relational database to ensure data integrity and reliability. The project includes end-to-end (e2e), integration, and unit tests to ensure the robustness and quality of the code. Pytest was the testing framework used for this purpose. Docker Compose was utilized to orchestrate two containerized services: the casino API (localhost:3001) and the PostgreSQL database (localhost:5433). This setup ensures easy deployment and consistency across different environments. The API is documented using Swagger, available at localhost:3001/docs. The project is organized into models, schemas, routes, services, repositories, and exceptions to ensure clean, modular, and maintainable code. It includes commit patterns, dependency management with Poetry, and follows best practices for API development and testing.",
      projectLink: "https://github.com/barbaracalderon/casino-backend",
      tags: [
        Tag.PYTHON,
        Tag.PYTEST,
        Tag.FASTAPI,
        Tag.PYDANTIC,
        Tag.POSTGRESQL,
        Tag.SQLITE,
        Tag.SQLALCHEMY,
        Tag.DOCKER,
        Tag.DOCKERCOMPOSE,
      ],
      pictures: ["../../assets/casino01.png", "../../assets/casino02.png"],
    },
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle("PR | Portfolio");
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }
}
