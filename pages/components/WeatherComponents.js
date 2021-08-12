import styles from '../../styles/Home.module.css';
import React, { useState } from 'react';

const Weather = () => {
  const searchPlace = e => {
    setSearchPlaceText(e.target.value);
    
  };

  const [searchPlaceText, setSearchPlaceText] = useState('');

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a>Weather information</a>
      </h1>

      <p className={styles.description}>
        Search a place for weather information
        <br />
        <br />
        <span>
          <input
            value={searchPlaceText}
            placeholder="Search"
            id="placeName"
            onChange={searchPlace}
          />
        </span>
      </p>

      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h3>Documentation &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
        >
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h3>Deploy &rarr;</h3>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>
  );
};

export default Weather;
