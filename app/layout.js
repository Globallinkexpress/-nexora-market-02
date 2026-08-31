export const metadata = {
  title: "Nexora Market",
  description: "Your global marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}