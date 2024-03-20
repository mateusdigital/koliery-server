import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta http-equiv="Refresh" content="0; url='https://mateus.digital/koliery'" />

      </head>
      <body>{children}</body>
    </html>
  );
}
