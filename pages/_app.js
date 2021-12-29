import 'tailwindcss/tailwind.css';
import '../public/styles.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const router = useRouter();

  return (
    <div className="bg-white">
      <Header mode={router.pathname === '/' ? 'dark' : 'light'} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
