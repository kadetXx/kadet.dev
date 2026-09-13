import type { Metadata } from "next";
import { PrismicPreview } from "@prismicio/next";
import { cereal } from "@/fonts/cereal";
import { repositoryName } from "@/lib/prismic";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kadet.dev"),
  title: {
    default: "Kadet - Collins Enebeli",
    template: "%s | Kadet",
  },
  description: "Frontend Software Engineer",
  keywords: [
    "frontend developer",
    "frontend engineer",
    "tech",
    "software engineer",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
  ],
  authors: [{ name: "Collins Enebeli", url: "https://kadet.dev" }],
  creator: "@kadetXx",
  icons: { icon: "/icon.png", apple: "/kadet.png" },
  openGraph: {
    type: "website",
    siteName: "Kadet - Collins Enebeli",
    url: "https://kadet.dev",
  },
  twitter: { card: "summary_large_image", creator: "@kadetXx" },
};

export const viewport = {
  themeColor: "#151515",
  colorScheme: "dark" as const,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cereal.variable}>
      <body>
        {children}
        {/* v2's global.css hid #prismic-toolbar-v2 outright; that rule is not
            carried over because the toolbar is what drives the preview session. */}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
