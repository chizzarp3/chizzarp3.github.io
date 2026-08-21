import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ivan-ivashchenko.pages.dev"),
  title: "Иван Иващенко — биотехнолог и разработчик научного ПО",
  description: "3D-клеточные модели, вирусологические исследования, компьютерное зрение и научное программное обеспечение.",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: "Иван Иващенко — 3D-клеточные модели и научное ПО",
    description: "Биотехнолог, исследователь 3D-клеточных моделей и разработчик научного программного обеспечения.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Иван Иващенко — 3D-клеточные модели и научное ПО" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Иван Иващенко — 3D-клеточные модели и научное ПО",
    description: "Биотехнолог, исследователь и разработчик научного программного обеспечения.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru"><body>{children}</body>
    </html>
  );
}
