import "./globals.css";

export const metadata = {
  title: "Activecraft || Best web development company India | Best web design company India",
  description: "Top Web Development Company in India 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Kha7_4beJ7YnKeI2yR7ppO4C4bDvUNPgpme0wetFCBI"
        />
        <meta
          name="description"
          content="We Are The Best Web Development Company in India & USA, offers No.1 iOS, Android App Development, internet marketing services at affordable prices."
        />
        <meta
          name="keywords"
          content="Top Web Development Company in India, Best Web Development Company"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
