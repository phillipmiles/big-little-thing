import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ContentWrap from '../../components/generic/ContentWrap';
import PageWithFooter from '../../components/generic/PageWithFooter';
import Nav from '../../components/Nav';
import NewsletterBlock from '../../components/NewsletterBlock';
import categories from '../../data/categories';
import projects from '../../data/projects';

interface ProjectProps {
  title: string;
  category: string;
}

const Project = ({ title, category }: ProjectProps) => {
  return (
    <>
      <Head>
        <title>{title} | Big Little Thing</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <PageWithFooter>
        <Nav />
        <main style={{ flexGrow: 1, backgroundColor: '#EFEFEF' }}>
          <div
            style={{
              color: 'white',
              background:
                'linear-gradient(150deg, rgba(102,108,101,1) 0%, rgba(80,88,79,1) 100%)',
              textAlign: 'center',
            }}
          >
            <ContentWrap padding="64px" maxWidth="500px">
              <div style={{ paddingTop: 80, marginBottom: 64 }}>
                <h1 style={{ fontSize: 48, marginBottom: 32 }}>{title}</h1>
                <span style={{ color: '#9B9F9B' }}>
                  <span>5 days ago</span>
                  <span style={{ marginRight: 48, marginLeft: 48 }}>
                    Intermediate
                  </span>
                  <span>{category}</span>
                </span>
              </div>
            </ContentWrap>

            <ContentWrap
              padding="64px"
              maxWidth="1000px"
              style={{ transform: 'translateY(92px)', marginTop: '-92px' }}
            >
              <div
                style={{
                  boxShadow:
                    '0px 16px 24px -16px rgba(0,0,0,0.15), 0px 4px 16px 0px rgba(0,0,0,0.02)',
                  borderRadius: 8,
                }}
              >
                <Image
                  src="/images/projects/easy-woven-cane-nightstand/framed-board.jpg"
                  alt=""
                  width={1000}
                  height={480}
                  objectFit="cover"
                  layout="responsive"
                  style={{ borderRadius: 8, verticalAlign: 'baseline' }}
                />
              </div>
            </ContentWrap>
          </div>
          <div style={{ marginTop: 92, paddingTop: 92, paddingBottom: 92 }}>
            <ContentWrap padding="64px" maxWidth="640px">
              <p>
                I started this decade as a first-year college student fresh out
                of high school. I was 17, didn’t have a job, didn’t have any
                industry connections, and really didn’t know shit. And now
                you’re reading my blog! I would have been proud. I’ve told bits
                and pieces of my story on different podcasts.
              </p>
              <p>
                Now feels like an appropriate time to write down the parts that
                were most memorable to me. Every person’s story is unique and
                not directly reproducible. I’ve benefited immensely from the
                privilege of being born in an upper middle class family and
                looking like a typical coder
              </p>
            </ContentWrap>
            <ContentWrap
              padding="64px"
              maxWidth="1000px"
              style={{ paddingTop: 92, paddingBottom: 92 }}
            >
              <div
                style={{
                  borderRadius: 8,
                }}
              >
                <Image
                  src="/images/projects/easy-woven-cane-nightstand/top-2.jpg"
                  alt=""
                  width={1000}
                  height={600}
                  objectFit="cover"
                  layout="responsive"
                  style={{ borderRadius: 8, verticalAlign: 'baseline' }}
                />
              </div>
            </ContentWrap>
            <ContentWrap
              padding="64px"
              maxWidth="640px"
              style={{ paddingBottom: 92 }}
            >
              <h2 style={{ fontSize: 32, marginBottom: 16 }}>Heading of 3</h2>
              <p>
                I started this decade as a first-year college student fresh out
                of high school. I was 17, didn’t have a job, didn’t have any
                industry connections, and really didn’t know shit. And now
                you’re reading my blog! I would have been proud. I’ve told bits
                and pieces of my story on different podcasts.
              </p>
              <p>
                Now feels like an appropriate time to write down the parts that
                were most memorable to me. Every person’s story is unique and
                not directly reproducible. I’ve benefited immensely from the
                privilege of being born in an upper middle class family and
                looking like a typical coder
              </p>
            </ContentWrap>
            <ContentWrap
              padding="64px"
              maxWidth="1000px"
              style={{ marginBottom: 56 }}
            >
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    borderRadius: 8,
                    width: '360px',
                    flexShrink: 0,
                    marginRight: 56,
                  }}
                >
                  <Image
                    src="/images/projects/easy-woven-cane-nightstand/top-2.jpg"
                    alt=""
                    width={1000}
                    height={600}
                    objectFit="cover"
                    layout="responsive"
                    style={{ borderRadius: 8, verticalAlign: 'baseline' }}
                  />
                </div>
                <div>
                  <h2 style={{ fontSize: 28, marginBottom: 16 }}>
                    Step 1: Sanding
                  </h2>
                  <p>
                    Now feels like an appropriate time to write down the parts
                    that were most memorable to me. Every person’s story is
                    unique and not directly reproducible. I’ve benefited
                    immensely from the privilege of being born in an upper
                    middle class family and looking like a typical coder
                  </p>
                </div>
              </div>
            </ContentWrap>
            <ContentWrap
              padding="64px"
              maxWidth="1000px"
              style={{ marginBottom: 56 }}
            >
              <div style={{ display: 'flex' }}>
                <div
                  style={{
                    borderRadius: 8,
                    width: '360px',
                    flexShrink: 0,
                    marginRight: 56,
                  }}
                >
                  <Image
                    src="/images/projects/easy-woven-cane-nightstand/framed-board.jpg"
                    alt=""
                    width={1000}
                    height={600}
                    objectFit="cover"
                    layout="responsive"
                    style={{ borderRadius: 8, verticalAlign: 'baseline' }}
                  />
                </div>
                <div>
                  <h2 style={{ fontSize: 28, marginBottom: 16 }}>
                    Step 2: Glue-up
                  </h2>
                  <p>
                    Now feels like an appropriate time to write down the parts
                    that were most memorable to me. Every person’s story is
                    unique and not directly reproducible. I’ve benefited
                    immensely from the privilege of being born in an upper
                    middle class family and looking like a typical coder
                  </p>
                </div>
              </div>
            </ContentWrap>
          </div>
        </main>

        <NewsletterBlock />
      </PageWithFooter>
    </>
  );
};

export async function getStaticProps(context: any) {
  const project = projects.find((p) => p.slug === context.params.pid);
  const category = project
    ? categories.find((c) => c.id === project.categories[0])
    : undefined;

  return {
    props: {
      title: project ? project.title : 'Title',
      category: category ? category.title : 'None',
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: projects.map((p) => `/projects/${p.slug}`),
    fallback: false,
  };
}

export default Project;
