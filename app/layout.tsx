import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Bonsai Investments",
  description:
    "Bonsai Investments is a Zürich-based investment advisory firm providing strategic capital solutions and investment expertise.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
