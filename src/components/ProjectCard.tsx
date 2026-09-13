"use client";

import { useRef } from "react";
import type { Project } from "@/data/projects";
import "./ProjectCard.css";

type Props = Project & { featured?: boolean };

/* CC0, from MDN's shared assets. A placeholder: self-host the real thing in
   public/ before this ships -- hotlinking someone else's bucket is fragile and
   rude, and the licence of whatever replaces it needs checking. Wants a slow,
   wide, low-contrast clip; anything fast-cut fights the curtain. */
const BACKDROP = "https://mdn.github.io/shared-assets/videos/flower.mp4";

const ProjectCard = ({
  title,
  description,
  stack,
  url,
  github,
  featured,
}: Props) => {
  const video = useRef<HTMLVideoElement>(null);

  /* Only the hovered card decodes. Three clips looping permanently behind a
     hidden curtain is real CPU for something nobody is looking at. */
  const play = () => void video.current?.play().catch(() => {});
  const pause = () => video.current?.pause();

  return (
    <article
      className={`project${featured ? " project--featured" : ""}`}
      onMouseEnter={play}
      onMouseLeave={pause}
    >
      {/* Video under a curtain: the curtain is dense over the text column and
          opens up to the right, so the type stays readable while there is
          still enough movement showing to be worth a click. */}
      <div className="project__media" aria-hidden="true">
        <video
          ref={video}
          className="project__video"
          src={BACKDROP}
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="project__curtain" />
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
};

export default ProjectCard;
