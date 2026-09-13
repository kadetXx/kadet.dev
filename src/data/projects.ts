export type Project = {
  title: string;
  description: string;
  stack: string;
  url: string;
  github: string;
  /* kept in the list but not rendered -- flip to false to bring it back */
  hidden?: boolean;
};

/* Carried over from v2's src/constants/projects.js. The grid is built for
   three cards (one wide, two narrow), so entries beyond that are hidden
   rather than deleted. */
const allProjects: Project[] = [
  {
    title: "Select Weapon",
    description: "3D FPS weapon select HUD.",
    stack: "Three.js, JS, Vite",
    url: "https://selectweapon.space",
    github: "https://github.com/kadetXx/select-weapon",
  },
  {
    title: "KeyMIDI",
    description: "MacOS MIDI plugin.",
    stack: "Electron, TS",
    url: "https://keymidi.app",
    github: "https://github.com/kadetXx/keymidi",
  },
  {
    title: "Algopatterns",
    description: "Live code music.",
    stack: "NextJS/TS, Strudel.js",
    url: "https://algopatterns.cc",
    github: "https://github.com/kadetXx/algopatterns",
  },
  {
    title: "Sheldon",
    description: "Self Hosted Agentic Assistant.",
    stack: "Go, Docker, Traefik",
    url: "https://bowerhall.ai/sheldon",
    github: "https://github.com/bowerhall/sheldon",
    hidden: true,
  },
];

export const projects = allProjects.filter((project) => !project.hidden);

export const socials = [
  { label: "Github", href: "https://github.com/kadetXx" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/collinsenebeli/" },
  { label: "Email", href: "mailto:hello@kadet.dev" },
];
