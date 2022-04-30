import Image from 'next/image';
import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
  style?: { [key: string]: any };
}

const NavItem = ({ href, children, style }: Props) => (
  <Link href={href}>
    <a
      style={{
        paddingLeft: '8px',
        paddingRight: '8px',
        textTransform: 'uppercase',
        fontSize: '14px',
        fontWeight: 500,
        letterSpacing: '2px',
        ...style,
      }}
    >
      {children}
    </a>
  </Link>
);

export default NavItem;
