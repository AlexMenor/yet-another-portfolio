import 'tailwindcss/tailwind.css';
import '../public/styles.css';

import { useRouter } from 'next/router';

import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div className="bg-white">
      <Header mode={router.pathname === '/' ? 'dark' : 'light'} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
