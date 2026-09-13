import ProjectCard from "@/components/ProjectCard";
import Clock from "@/components/Clock";
import { projects, socials } from "@/data/projects";
import "./home.css";

export default function Home() {
  return (
    <main className="home">
      <header className="hero">
        <Clock />
        <h1 className="hero__title">
          /kadet
          <br />
          かっこいい子.
        </h1>
      </header>

      <section className="socials">
        <p className="eyebrow">Social Links</p>
        <ul className="socials__list">
          {socials.map(({ label, href }) => (
            <li key={label}>
              <a
                className="socials__link"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* <Navigation /> is built but intentionally not rendered -- the layer
          it was transcribed from is toggled off in the design. */}

      <section className="projects" id="projects">
        <p className="eyebrow">Projects</p>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} featured={index === 0} />
          ))}
        </div>
      </section>
    </main>
  );
}
