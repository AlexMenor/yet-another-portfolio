import 'tailwindcss/tailwind.css';
import '../public/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
