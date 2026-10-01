import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GDM Construction & Roofing | General Building, Renovation & Roofing | Johannesburg",
  description:
    "GDM Construction & Roofing (Pty) Ltd — General building & renovation contractors in Johannesburg. Specialists in new roof installations, ceilings (Rhinolite), painting, waterproofing, and 24/7 storm repairs.",
  metadataBase: new URL("https://gdmconstruction.co.za"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "GDM Construction & Roofing | General Building, Renovation & Roofing",
    description:
      "General building and renovation contractors in Johannesburg. Top-rated for new roof installations, Rhinolite ceilings, painting, and 24/7 emergency call-outs.",
    images: [
      {
        url: "/images/gdm-logo.jpg",
        width: 800,
        height: 800,
        alt: "GDM Construction and Roofing (Pty) Ltd Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GDM Construction & Roofing | Johannesburg",
    description:
      "General building, renovations, new roofs, Rhinolite ceilings, and painting in Johannesburg.",
    images: ["/images/gdm-logo.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "GDM Construction and Roofing (Pty) Ltd",
  image: "https://gdmconstruction.co.za/images/gdm-logo.jpg",
  telephone: "+27833662700",
  email: "contact@gdmconstruction.co.za",
  address: {
    "@type": "PostalAddress",
    streetAddress: "80 North Bezuidenhout Valley",
    addressLocality: "Johannesburg",
    addressRegion: "Gauteng",
    postalCode: "2094",
    addressCountry: "ZA",
  },
  areaServed: [
    "Bedfordview",
    "Sandton",
    "Edenvale",
    "Randburg",
    "Houghton",
    "Fourways",
    "Wendywood",
    "Orange Grove",
    "Johannesburg",
  ],
  url: "https://gdmconstruction.co.za/",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:30",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "25",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
