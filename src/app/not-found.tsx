import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="notfound">
      <p className="eyebrow">Error 404</p>
      <h1 className="notfound__title">
        Nothing here.
        <br />
        何もない。
      </h1>
      <Link className="notfound__link" href="/">
        Back home
      </Link>
    </main>
  );
}
