import "./blog-shell.css";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="blog-shell">{children}</div>;
}
