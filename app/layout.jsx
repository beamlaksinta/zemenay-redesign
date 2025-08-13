// app/layout.jsx
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Zemenay Tech Solutions',
  description: 'Innovative web and software solutions from Ethiopia & Africa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}