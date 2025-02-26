import type { Metadata } from "next";
import "./globals.css";
import RootHeader from "./components/RootHeader/RootHeader";

export const metadata: Metadata = {
  title: "Mingoc Custom",
  description: "From Mingoc with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="rootLayoutContainer">
        <div className="header">
          <div className="container">
            <RootHeader/>
          </div>
        </div>
        <div className="contentContainer">
          {children}
        </div>
        <div className="footer">
          <div className="container" style={{textAlign:'center'}} >
          © 2025 Mingoc142 Corporation. All rights reserved. Designed with Mingoc142❤️.
          </div>
        </div>
      </body>
    </html>
  );
}
