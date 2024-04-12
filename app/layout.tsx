import "./globals.css";
export default function layout({ children }: any) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
