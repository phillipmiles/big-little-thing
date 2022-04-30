interface Props {
  children?: React.ReactNode;
  url: string;
  style?: { [key: string]: any };
}

const BackgroundImage = ({ children, url, style, ...props }: Props) => (
  <div
    style={{
      backgroundImage: `url('/images/hero.jpg')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      ...style,
    }}
    {...props}
  >
    {children}
  </div>
);

export default BackgroundImage;
