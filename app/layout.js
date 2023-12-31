import "./globals.css";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "Mentoring UMN 2023",
  description: "Official Website for Character Building UMN 2023 (Mentoring).",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${karla.className} hidescroll text-white`}>
        {children}
      </body>
    </html>
  );
}
