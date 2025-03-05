import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "SPADA - Basketball Analysis & Betting Predictions",
  description: "Advanced basketball analytics to improve betting predictions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
