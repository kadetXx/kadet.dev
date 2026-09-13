"use client";

import { useRef } from "react";
import type { Project } from "@/data/projects";
import "./ProjectCard.css";

type Props = Project & { featured?: boolean };

/* Local test asset, transcoded down from the 169MB/120fps/3K screen capture in
   Downloads -- the card is at most 665x366, so the original was decoding ~20x
   the pixels it could ever show. Kept out of git for now (see .gitignore);
   decide on LFS or a CDN before this ships. Currently shared by all three
   cards, though it is really Select Weapon's demo. */
const BACKDROP = "/select-weapon-demo.mp4";

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
