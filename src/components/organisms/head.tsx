import Head from 'next/head'

interface CustomHeadProps {
  title: string
  description: string
}

const CustomHead = ({ title, description }: CustomHeadProps) => {
  return (
    <>
      <Head>
        <title>{`${title} | MHI素材計算ツール `}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/site-img-og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/images/site-img-x.jpg" />
      </Head>
    </>
  )
}

export default CustomHead
