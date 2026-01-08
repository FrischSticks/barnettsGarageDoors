import './globals.css';
import { ReactNode } from 'react';
import NavBar from '../components/NavBar';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
