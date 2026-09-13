import type { Project } from "@/data/projects";
import "./ProjectCard.css";

type Props = Project & { featured?: boolean };

const ProjectCard = ({
  title,
  description,
  stack,
  url,
  github,
  featured,
}: Props) => (
  <article className={`project${featured ? " project--featured" : ""}`}>
    <div className="project__meta">
      <p className="project__stack">{stack}</p>
      <p className="project__description">{description}</p>
    </div>

    <div className="project__foot">
      <h2 className="project__title">{title}</h2>
      <div className="project__links">
        <a
          className="project__link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit
        </a>
        <a
          className="project__link"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
      </div>
    </div>
  </article>
);

export default ProjectCard;
