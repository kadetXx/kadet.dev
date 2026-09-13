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
    {/* Full-bleed backdrop, painted in on hover. The wrapper exists to clip
        to the card's rounded corners -- overflow on .project itself would eat
        the gutter hover bridges. Swap .project__fill for a
        <video className="project__fill" autoPlay muted loop playsInline />
        and nothing else has to change. */}
    <div className="project__media" aria-hidden="true">
      <div className="project__fill" />
    </div>

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
