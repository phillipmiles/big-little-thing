import {
  faInstagram,
  faPinterest,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import NavItem from './NavItem';

interface Props {
  spacious?: boolean;
  transparent?: boolean;
  invert?: boolean;
  style?: { [key: string]: any };
}

const Nav = ({
  spacious = false,
  invert = false,
  transparent = false,
  style,
}: Props) => (
  <div
    style={{
      paddingTop: spacious ? '24px' : 16,
      paddingBottom: spacious ? '24px' : 16,
      paddingLeft: '64px',
      paddingRight: '64px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      backgroundColor: transparent ? 'transparent' : 'white',
      color: invert ? 'white' : 'black',
      ...style,
    }}
  >
    <Link href="/">
      <a>
        <Image
          src={invert ? '/images/logo_clear.svg' : '/images/logo.svg'}
          alt="Big Little Thing logo"
          width={88}
          height={88}
          layout="fixed"
        />
      </a>
    </Link>
    <nav style={{ color: invert ? 'white' : 'black' }}>
      <NavItem href="/#projects" style={{ marginRight: '16px' }}>
        Projects
      </NavItem>
      <NavItem href="#newsletter" style={{ marginRight: '16px' }}>
        Newsletter
      </NavItem>
      <NavItem
        href="https://www.etsy.com/au/shop/BigLittleThing"
        style={{ marginRight: '16px' }}
        external
      >
        Shop
      </NavItem>
      <NavItem href="/" style={{ marginRight: '16px' }}>
        Contact
      </NavItem>
      <NavItem
        href="https://www.instagram.com/biglittle.thing/"
        style={{ verticalAlign: 'middle' }}
        external
      >
        <FontAwesomeIcon
          icon={faInstagram}
          style={{
            width: '20px',
            height: 20,
          }}
        />
      </NavItem>
      <NavItem href="/" external style={{ verticalAlign: 'middle' }}>
        <FontAwesomeIcon
          icon={faPinterest}
          style={{
            width: '20px',
            height: 20,
          }}
        />
      </NavItem>
      <NavItem href="/" external style={{ verticalAlign: 'middle' }}>
        <FontAwesomeIcon
          icon={faTwitter}
          style={{
            width: '20px',
            height: 20,
          }}
        />
      </NavItem>
    </nav>
  </div>
);

export default Nav;
