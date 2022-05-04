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
    <Nav transparent invert />
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
          style={{ fontSize: '56px', maxWidth: '45%', paddingBottom: '64px' }}
        >
          <h1 style={{ fontSize: '56px', marginBottom: '40px', lineHeight: 1 }}>
            The DIY woodwork project library
          </h1>
          <p style={{ fontSize: '20px', marginBottom: 24 }}>
            A collection of woodworking plans and how-to guides for DIYers.
          </p>
          <Link href="#projects">
            <a
              style={{
                fontSize: '16px',
                fontWeight: 700,
                backgroundColor: '#A94700',
                paddingTop: '20px',
                paddingBottom: '20px',
                paddingLeft: '32px',
                paddingRight: '32px',
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
