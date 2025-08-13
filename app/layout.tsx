import './globals.css';
import Header from '../components/Header';

export const metadata = {
  title: 'Virtual Pet Cemetery',
  description: 'Create a peaceful memorial world for your pet.',
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
