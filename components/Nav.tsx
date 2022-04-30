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
  style?: { [key: string]: any };
}

const Nav = ({ style }: Props) => (
  <div
    style={{
      paddingTop: '24px',
      paddingLeft: '64px',
      paddingRight: '64px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      ...style,
    }}
  >
    <Image
      src="/images/logo_clear.svg"
      alt="Big Little Thing logo"
      width={88}
      height={88}
      layout="fixed"
    />
    <nav>
      <NavItem href="/" style={{ marginRight: '16px' }}>
        Projects
      </NavItem>
      <NavItem href="/" style={{ marginRight: '16px' }}>
        Newsletter
      </NavItem>
      <NavItem href="/" style={{ marginRight: '16px' }}>
        Shop
      </NavItem>
      <NavItem href="/" style={{ marginRight: '16px' }}>
        Contact
      </NavItem>
      <NavItem href="/" style={{ verticalAlign: 'middle' }}>
        <FontAwesomeIcon
          icon={faInstagram}
          style={{
            width: '20px',
          }}
        />
      </NavItem>
      <NavItem href="/" style={{ verticalAlign: 'middle' }}>
        <FontAwesomeIcon
          icon={faPinterest}
          style={{
            width: '20px',
          }}
        />
      </NavItem>
      <NavItem href="/" style={{ verticalAlign: 'middle' }}>
        <FontAwesomeIcon
          icon={faTwitter}
          style={{
            width: '20px',
          }}
        />
      </NavItem>
    </nav>
  </div>
);

export default Nav;
