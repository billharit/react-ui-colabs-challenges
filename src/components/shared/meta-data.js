import Head from "next/head";

export default function MetaData({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name={description} content={description} />
    </Head>
  );
}
