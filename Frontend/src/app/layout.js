import "@/styles/globals.scss";

export const metadata = {
  title: "SAC | Saudi artisanal company",
  description: "Weaving the future of our culture through craftsmanship",
};

export default function RootLayout({ children, params }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
