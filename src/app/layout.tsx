import Nav from "@/components/nav/Nav";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-black ">
      <body className="max-w-[1440px] mx-auto flex">
        <Nav />

        {children}
      </body>
    </html>
  );
}
