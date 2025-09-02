import "./globals.css";
// import Header from "./Header";
import Footer from "./Footer";

export const metadata = {
  title: "Invitarte",
  description: "Diseñamos detalles digitales listos para hacer de cada momento algo especial.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}