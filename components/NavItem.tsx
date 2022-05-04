import Image from 'next/image';
import Link from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  style?: { [key: string]: any };
}

const NavItem = ({ href, children, external = false, style }: Props) => {
  return external ? (
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
      target="_blank"
      href={href}
      rel="noreferrer"
    >
      {children}
    </a>
  ) : (
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
        href={href}
      >
        {children}
      </a>
    </Link>
  );
};

export default NavItem;
