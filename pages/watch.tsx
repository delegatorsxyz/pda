import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Avatar, Card, Typography, Button, Heading, Input, Skeleton, VisuallyHidden } from "@ensdomains/thorin";
import { SetStateAction, useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';

const Watch: NextPage = () => {
  const [addressValue, setAddressValue] = useState("");
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
      setVisible(!visible);
    };

  const [delegatingCards] = useState([
    {
      title: 'delegatingToThis.eth',
      since: 10,
      with: 10,
      dao: 'exampleDAO'
    },
    {
      title: 'delegatingToThisOneToo.eth',
      since: 30,
      with: 80,
      dao: 'example2DAO'
    },
    {
      title: 'delegatingToThisOneAlso.eth',
      since: 4,
      with: 69,
      dao: 'example3DAO'
    },
    {
      title: 'delegatingToThisOneAlsoToo.eth',
      since: 14,
      with: 79,
      dao: 'example4DAO'
    },
  ]);

  const [delegatorsCards] = useState([
    {
      title: 'deletagor1.eth',
      since: 10,
      with: 10,
      dao: 'exampleDAO'
    },
    {
      title: 'delegator2.eth',
      since: 30,
      with: 80,
      dao: 'example2DAO'
    },
    {
      title: 'delegator3.eth',
      since: 4,
      with: 69,
      dao: 'example3DAO'
    },
    {
      title: 'delegator4.eth',
      since: 14,
      with: 79,
      dao: 'example4DAO'
    },
    {
      title: 'delegator5.eth',
      since: 14,
      with: 79,
      dao: 'example4DAO'
    },
    {
      title: 'delegator6.eth',
      since: 4,
      with: 9,
      dao: 'example4DAO'
    },
    {
      title: 'delegator7.eth',
      since: 94,
      with: 99,
      dao: 'example4DAO'
    },
  ]);

  const onChangeHandler = (event: { target: { value: SetStateAction<string>; }; }) => {
    setAddressValue(event.target.value);
 };

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
        <Heading level="2" style={{marginBottom: "40px"}}>
          {" "}
          Observe who delegates to a given address. Observe who delegates to
          this address.{" "}
        </Heading>

      <div style={{width: "500px"}}>        
      <Input
          className={styles.inputStyle}
          label="View delegators and delegates of an address or ens"
          placeholder="vitalik.eth"
          onChange={onChangeHandler} style={{marginBottom: "10px"}}
        />
      </div>

      <Button style={{width: "500px"}} className={styles.buttonEye} onClick={handleClick} > 👀 </Button>

      {visible && (
          <><Heading level='2' style={{ padding: "10px" }}>{addressValue} is delegating to : </Heading><Box sx={{ width: '100%' }} style={{ backgroundColor: "gray", display: "flex", padding: "10px", borderRadius: "10px" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ display: "flex", paddingRight: "10px", paddingLeft: "10px" }}>
              {delegatingCards.map((card, i) => (

                <div className="card" key={i}>
                  <Grid item xs={6}>
                    <Card style={{ width: "300px", margin: "10px" }}>
                      <div style={{ maxWidth: "50px" }}>
                        <Avatar label={""} />
                      </div>
                      <p style={{ fontWeight: "bold", padding: "10px" }}>{card.title}</p>
                      <p style={{ padding: "1px" }}>from: {card.dao}</p>
                      <p style={{ padding: "1px" }}>since: {card.since} days</p>
                    </Card>
                  </Grid>
                </div>
              ))}
            </Grid>
          </Box>
          
          <Heading level='2' style={{ padding: "10px" }}>are delegating to {addressValue} : </Heading>
          <Box sx={{ width: '100%' }} style={{ backgroundColor: "gray", display: "flex", padding: "10px", borderRadius: "10px" }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ display: "flex", paddingRight: "10px", paddingLeft: "10px" }}>
                {delegatorsCards.map((card, i) => (

                  <div className="card" key={i}>
                    <Grid item xs={6}>
                      <Card style={{ width: "300px", margin: "10px" }}>
                        <div style={{ maxWidth: "50px" }}>
                          <Avatar label={""} />
                        </div>
                        <p style={{ fontWeight: "bold", padding: "10px" }}>{card.title}</p>
                        <p style={{ padding: "1px" }}>from: {card.dao}</p>
                        <p style={{ padding: "1px" }}>since: {card.since} days</p>
                      </Card>
                    </Grid>
                  </div>
                ))}
              </Grid>
          </Box></>
      )}
      
      </main>
    </div>

  );
};

export default Watch;