/** A wrapping component used to center and limit the width of any page content whilst
 * providing appropriate margin sizes for desktop and mobile devices. */

interface Props {
  padding: string;
  children: React.ReactNode;
  maxWidth?: string;
  style?: { [key: string]: any };
}

const ContentWrap = ({
  style,
  children,
  padding,
  maxWidth = 'none',
}: Props) => {
  return (
    <div
      style={{
        paddingLeft: padding,
        paddingRight: padding,
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          flexGrow: 1,
          flexDirection: 'column',
          maxWidth: maxWidth,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ContentWrap;
