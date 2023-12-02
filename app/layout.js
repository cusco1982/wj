import 'bootstrap/dist/css/bootstrap.css';
// import './globals.css'
import BootstrapClient from './components/BootstrapClient';
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WJ Best Insulation, LLC',
  description: 'WJ Best Insultion in New Jersey',
}


import Navbar from './components/Navbar';

import Footer from './components/Footer';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}> */}
      <body>






        <Navbar />

        {children}

        <Footer />






        {/* <FixedBottomNavigation /> */}




        <BootstrapClient />
      </body>
    </html>
  )
};
