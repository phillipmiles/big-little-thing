import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import ContentWrap from '../components/generic/ContentWrap';
import Page from '../components/generic/Page';
import Nav from '../components/Nav';

const SubscriptionConfirmed: NextPage = () => {
  return (
    <>
      <Head>
        <title>Big Little Thing</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <Page>
        <Nav />
        <main>
          <ContentWrap
            padding="64px"
            maxWidth="640px"
            style={{ textAlign: 'center' }}
          >
            <div>
              <h2 style={{ marginTop: 128 }}>
                Your subscription to our list has been successful.
              </h2>
              <p style={{ marginBottom: '72px' }}>Thank you for subscribing!</p>
              <Link href="/">
                <a
                  style={{
                    display: 'inline',

                    backgroundColor: '#A94700',
                    color: 'white',
                    paddingLeft: 20,
                    paddingRight: 20,
                    paddingTop: 12,
                    paddingBottom: 12,
                    fontSize: 16,
                    // borderRadius: 4,
                  }}
                >
                  Back to home
                </a>
              </Link>
            </div>
          </ContentWrap>
        </main>
      </Page>
    </>
  );
};

export default SubscriptionConfirmed;
