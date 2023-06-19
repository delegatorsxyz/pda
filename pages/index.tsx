import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Button, Heading, Card } from "@ensdomains/thorin";
import logo from '../assets/pda.jpg'
import Image from 'next/image'

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
          <Heading style={{marginBottom: "40px", }}> Welcome to PDA </Heading>
          <Heading level='2' style={{paddingBottom: "40px"}}> insert catchy sentences on pda goals here </Heading>
          <div style={{width: "300px"}}>
              <Image className={styles.logo} src={logo} alt="logo"/>
          </div>

          <Heading style={{paddingTop: "10px", paddingBottom: "40px"}} level='2'> 🚧 under construction 🚧 </Heading>
          <Link href="/watch">
            <Button style={{width: "20%"}} href='./watch' > watch an address </Button>
          </Link>
      </main>
    </div>

  );
};

export default Home;