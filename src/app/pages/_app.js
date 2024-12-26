import { inter, fahkwang, kanit, shipporiMincho } from '../styles/fonts';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${fahkwang.variable} ${kanit.variable} ${shipporiMincho.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
