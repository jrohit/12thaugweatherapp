import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Weather from './components/WeatherComponents';
import Footer from './components/FooterComponent';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Weather Info</title>
      </Head>

      <Weather />

      <Footer />
    </div>
  );
}
