import './globals.css';

/**
 * Root layout component for the SevenWraps application
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

export const metadata = {
  title: 'SevenWraps - Modern Web Solutions',
  description: 'Premium web development and design services',
};
