import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BootstrapClient from './components/BootstrapClient';

export const metadata = {
  title: 'BOB.jetzt',
  description: 'BOB.jetzt Application',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
