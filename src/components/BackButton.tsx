import Link from "next/link";

const BackButton = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="back-button" aria-label={label}>
    <svg width="35" height="22" viewBox="0 0 72 42" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="none"
        stroke="#b3b3b3"
        strokeWidth="2"
        strokeMiterlimit="0"
        d="M72.807 11.199H2.093M11.933 1.399l-9.8 9.8 9.8 9.8"
      />
    </svg>
  </Link>
);

export default BackButton;
