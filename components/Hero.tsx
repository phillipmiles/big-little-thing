import Image from 'next/image';
import Link from 'next/link';
import BackgroundImage from './generic/BackgroundImage';
import ContentWrap from './generic/ContentWrap';
import Nav from './Nav';

interface Props {
  style?: { [key: string]: any };
}

const Hero = ({ style, ...props }: Props) => (
  <BackgroundImage
    style={{
      height: '100vh',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      ...style,
    }}
    url="https://images.unsplash.com/photo-1470342495351-a5f90c5011cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  >
    <Nav />
    <ContentWrap
      padding="64px"
      maxWidth="1100px"
      style={{
        flexGrow: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexGrow: 1,
          alignItems: 'center',
        }}
      >
        <div
          style={{ fontSize: '56px', maxWidth: '45%', paddingBottom: '48px' }}
        >
          <h1 style={{ fontSize: '56px', marginBottom: '32px' }}>
            The DIY woodwork project library
          </h1>
          <p style={{ fontSize: '20px' }}>
            A collection of woodworking plans and how-to guides for DIYers.
          </p>
          <Link href="./">
            <a
              style={{
                fontSize: '16px',
                backgroundColor: '#A94700',
                paddingTop: '16px',
                paddingBottom: '16px',
                paddingLeft: '24px',
                paddingRight: '24px',
              }}
            >
              Browse projects
            </a>
          </Link>
        </div>
      </div>
    </ContentWrap>
  </BackgroundImage>
);

export default Hero;
