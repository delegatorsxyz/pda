import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>PDA App</title>
        <meta
          content="The Public Delegate Announcement App"
          name="description"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <h1 className={styles.title}>
          Welcome to <a href="">PDA</a>
        </h1>

        <p className={styles.description}>
          🚧 Under Construction 🚧
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://delegators.xyz" rel="noopener noreferrer" target="_blank">
          Made with ❤️ by your frens at Delegators.xyz
        </a>
      </footer>
    </div>
  );
};

export default Home;
