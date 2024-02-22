import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Oscar de Jesus Zuñiga Zavala website."
      />
      <meta
        name="keywords"
        content="portfolio,oscar de jesus zuñiga zavala"
      />
      <meta property="og:title" content="Oscar de Jesus Zuñiga Zavala web" />
      <meta
        property="og:description"
        content="This is my website. Take a look 👀"
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Oscar de Jesus Zuñiga Zavala',
};
