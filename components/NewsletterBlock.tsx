import ContentWrap from './generic/ContentWrap';

interface Props {
  spacious?: boolean;
  transparent?: boolean;
  invert?: boolean;
  style?: { [key: string]: any };
}

const NewsletterBlock = ({ style }: Props) => (
  <div
    style={{
      backgroundColor: '#202120',
      paddingTop: 92,
      paddingBottom: 92,
      color: 'white',
    }}
  >
    <ContentWrap padding={'64px'} maxWidth="640px">
      <h2 style={{ fontSize: '32px' }}>Never miss a project</h2>
      <p style={{ color: '#D1D1D1' }}>
        Get an email update whenever new projects are added to the library.
      </p>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us11.list-manage.com/subscribe/post?u=a30ce64ff4f7b8fc36009c4ff&amp;id=201059f3bd"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <div id="mce-responses">
            <div id="mce-error-response" style={{ display: 'none' }}></div>
            <div id="mce-success-response" style={{ display: 'none' }}></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              placeholder="Your email address"
              style={{
                flexGrow: 1,
                fontSize: 16,
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 20,
                paddingRight: 20,
                borderRadius: 4,
                marginBottom: 0,
                border: 'none',
              }}
            />
            <button
              type="submit"
              id="mc-embedded-subscribe"
              value="Subscribe"
              name="subscribe"
              style={{
                marginLeft: 16,
                display: 'block',
                backgroundColor: '#A94700',
                border: 'none',
                color: 'white',
                paddingLeft: 32,
                paddingRight: 32,
                paddingTop: 12,
                paddingBottom: 12,
                fontSize: 16,
                borderRadius: 4,
                cursor: 'pointer',
              }}
            >
              Subscribe
            </button>
          </div>
          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_a30ce64ff4f7b8fc36009c4ff_201059f3bd"
              tabIndex={-1}
              value=""
            />
          </div>
        </form>
      </div>
      <span
        style={{
          fontSize: 14,
          color: '#D1D1D1',
          textAlign: 'center',
          marginTop: 24,
        }}
      >
        Unsubscribe at any time
      </span>
    </ContentWrap>
  </div>
);

export default NewsletterBlock;
