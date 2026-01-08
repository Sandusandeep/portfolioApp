import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import ProjectPage from "./ProjectPage";

function importAll(r) {
  return r.keys().map(r);
}

const todoImages = importAll(
  require.context("./assets/images/todo-screens", false, /\.(png|jpe?g|svg)$/)
);
const ecommerceImages = importAll(
  require.context(
    "./assets/images/e-commerce-screens",
    false,
    /\.(png|jpe?g|svg)$/
  )
);
const formImages = importAll(
  require.context(
    "./assets/images/formSubmission-screens",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

function ScrollToSkillsLink() {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("skills");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  return (
    <a href="#skills" onClick={handleClick}>
      Skills
    </a>
  );
}

function App() {
  return (
    <Router>
      <div className="portfolio-app">
        {/* Header */}
        <header className="portfolio-header">
          <div className="logo">
            <Link to="/">
              SANDEEP <span className="highlight">C</span>
            </Link>
          </div>
          <nav>
            <Link to="/">About</Link>
            <ScrollToSkillsLink />
            <Link to="/projects">Projects</Link>
            <a href="#contact">Contact</a>
          </nav>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <section className="hero-section">
                  <div className="hero-text">
                    <h2>Hello, I'm</h2>
                    <h1>Sandeep C</h1>
                    <h3>Frontend Developer/ Fullstack developer</h3>
                    <p>React JS | Advanced JavaScript | Redux</p>
                  </div>
                  {/* <div className="hero-image">
                    {/* Replace with your image */}

                  {/* </section></div> */}
                </section>

                {/* Professional Summary & Skills */}
                <section id="skills" className="skills-section">
                  <h2>Professional Summary</h2>
                  <p>
                    Front-end-focused Software Analyst with 3+ years of
                    experience in building scalable, performance, and modular
                    applications. Skilled in React.js, JavaScript, Java, HTML,
                    CSS, and API integration, with a strong foundation in
                    software architecture and component-based development.
                    Experienced in collaborating with cross-functional teams to
                    deliver intuitive, user-centric web applications and
                    error-free and optimized code.
                  </p>
                  <h3>Skills</h3>
                  <ul className="skills-list">
                    <li>
                      <b>Frontend:</b> React JS, Advanced JavaScript, Redux,
                      HTML, CSS, Hooks, Responsive UI
                    </li>
                    <li>
                      <b>Styling:</b> CSS Modules, Styled components
                    </li>
                    <li>
                      <b>Database:</b> MongoDB
                    </li>
                    <li>
                      <b>Backend:</b> Node.js, Express.js, API integration, Java
                      8+
                    </li>
                    <li>
                      <b>Tools:</b> Git, GitLab, Maven, Temenos Infinity (Kony
                      Framework)
                    </li>
                  </ul>
                </section>
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <div className="projects-section projects-route">
                <h2>Sample Projects</h2>
                <div className="projects-list">
                  <div className="project-card">
                    <Link to="/projects/todo">
                      Advanced Todo List Application
                    </Link>
                  </div>
                  <div className="project-card">
                    <Link to="/projects/form">Submission Form</Link>
                  </div>
                  <div className="project-card">
                    <Link to="/projects/ecommerce">
                      E-commerce Application (MegaMart)
                    </Link>
                  </div>
                </div>
              </div>
            }
          />
          <Route
            path="/projects/todo"
            element={
              <ProjectPage
                title="Advanced Todo List Application"
                images={todoImages}
                description="A feature-rich todo list app with advanced filtering, reminders, and productivity analytics."
                details={
                  <>
                    <ul>
                      <li>Multiple lists, priorities, and deadlines</li>
                      <li>Smart reminders and notifications</li>
                      <li>Productivity analytics dashboard</li>
                      <li>Responsive and accessible UI</li>
                    </ul>
                    <h3>Git repository link:</h3>
                    <a
                      href="https://github.com/Sandusandeep/todolist-mern"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/Sandusandeep/todolist-mern
                    </a>
                  </>
                }
              />
            }
          />
          <Route
            path="/projects/form"
            element={
              <ProjectPage
                title="Submission Form"
                images={formImages}
                description="Modern, validated form for user submissions, with real-time feedback and API integration."
                details={
                  <>
                    <ul>
                      <li>Field validation and error handling</li>
                      <li>API integration for data submission</li>
                      <li>Real-time feedback and progress</li>
                      <li>Clean, modern design</li>
                    </ul>

                    <h3>Git repository link:</h3>
                    <a href="https://github.com/Sandusandeep/e-form">
                      https://github.com/Sandusandeep/e-form
                    </a>
                  </>
                }
              />
            }
          />
          <Route
            path="/projects/ecommerce"
            element={
              <ProjectPage
                title="E-commerce Application (MegaMart)"
                images={ecommerceImages}
                description="Full-featured e-commerce platform with product catalog, cart, and secure checkout."
                details={
                  <>
                    <ul>
                      <li>Product catalog with search and filters</li>
                      <li>Shopping cart and checkout flow</li>
                      <li>User authentication and order history</li>
                      <li>Admin dashboard for product management</li>
                    </ul>

                    <h3>Git repository link:</h3>
                    <a href="https://github.com/Sandusandeep/e-commerce-MegaMart">
                      https://github.com/Sandusandeep/e-commerce-MegaMart
                    </a>
                  </>
                }
              />
            }
          />
        </Routes>
        {/* Contact Section (always visible at bottom) */}
        <section id="contact" className="contact-section">
          <h2>Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:sandycdeep@gmail.com">sandycdeep@gmail.com</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/sandeep-c-ba1157160/"
              target="_blank"
              rel="noopener noreferrer"
            >
              sandeep-c-ba1157160
            </a>
          </p>
          <p>Mobile: +91 7305463983</p>
        </section>
      </div>
    </Router>
  );
}

export default App;
