import "./globals.css";

export const metadata = {
  title: "BadSites.net",
  description: "Your trusted resource for identifying and avoiding problematic websites online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
