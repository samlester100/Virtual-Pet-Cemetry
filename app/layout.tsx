// app/layout.tsx
import './globals.css';
import Header from '../components/Header'; // use relative path (no @/)

export const metadata = {
  title: 'Virtual Pet Cemetery',
  description:
    'Create a peaceful memorial world for your pet and host an online funeral.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
