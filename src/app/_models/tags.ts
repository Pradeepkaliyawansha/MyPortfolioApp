export class Tag {
  static readonly ANGULAR = new Tag("Angular", "#5a7581");
  static readonly JAVA = new Tag("Java", "#5a7581");
  static readonly SQL = new Tag("SQL", "#355158");
  static readonly PYTHON = new Tag("Python", "#4a6a77");
  static readonly PANDAS = new Tag("Pandas", "#355158");
  static readonly RESTAPI = new Tag("Rest API", "#355158");
  static readonly POSTMAN = new Tag("Postman", "#355158");
  static readonly TYPESCRIPT = new Tag("Typescript", "#192129");
  static readonly JAVASCRIPT = new Tag("Javascript", "#4a6a77");
  static readonly HTML5 = new Tag("HTML5", "#192129");
  static readonly CSS3 = new Tag("CSS3", "#192129");
  static readonly BOOTSTRAP = new Tag("Bootstrap", "#192129");
  static readonly SQLITE = new Tag("SQLite", "#355158");
  static readonly PIP = new Tag("PIP", "#355158");
  static readonly OPENCV = new Tag("OpenCV", "#355158");
  static readonly NUMPY = new Tag("Numpy", "#355158");
  static readonly TKINTER = new Tag("Tkinter", "#355158");
  static readonly JQUARY = new Tag("Jquary", "#355158");
  static readonly PHP = new Tag("PHP", "#4a6a77");
  static readonly MYSQL = new Tag("My SQL", "#355158");
  static readonly REACT = new Tag("ReactJs", "#355158");
  static readonly EXPRESS = new Tag("ExpressJS", "#355158");
  static readonly NODE = new Tag("NodeJs", "#355158");
  static readonly MONGO = new Tag("MongoDb", "#355158");
  static readonly KMEANS = new Tag("K-Means", "#355158");
  static readonly EUCLIDEAN = new Tag("Euclidean Distence", "#355158");
  static readonly RANDOM = new Tag("Random forest", "#355158");
  static readonly TAILWIND = new Tag("Tailwind CSS", "#192129");

  private constructor(
    private readonly key: string,
    public readonly color: string
  ) {}

  toString() {
    return this.key;
  }
}
