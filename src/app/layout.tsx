import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Button from "@/components/Button";
import { twMerge } from "tailwind-merge";

const roboto = Roboto({ weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booking App",
  description: "Booking App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={twMerge("w-4/6 m-auto",roboto.className)}>
        <header className="bg-white w-full  flex justify-between items-center py-8">
          <h1>Booking App</h1>
            <Button> 
              Connexion
            </Button>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
