import "./Navigation.css";

/* Transcribed from the hidden "Navigation" layer in the desktop frame
   (00 WORK / 01 ARTICLES / 02 SAY HELLO). It is toggled off in the design,
   so it is built but not rendered -- drop <Navigation /> into page.tsx
   between the socials and the projects grid to switch it on. Targets are
   placeholders until the routes they imply actually exist. */

const items = [
  { index: "00", label: "Work", href: "#projects" },
  { index: "01", label: "Articles", href: "/blog" },
  { index: "02", label: "Say Hello", href: "mailto:hello@kadet.dev" },
];

const Navigation = () => (
  <nav className="nav" aria-label="Primary">
    <p className="eyebrow">Navigation</p>

    <ul className="nav__list">
      {items.map(({ index, label, href }) => (
        <li key={index} className="nav__item">
          <span className="nav__index" aria-hidden="true">
            {index}
          </span>
          <a className="nav__link" href={href}>
            {label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
