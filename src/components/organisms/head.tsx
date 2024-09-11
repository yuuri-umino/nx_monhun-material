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
        <meta
          property="og:image"
          content="https://www.mh-material-calculate.net/site-img-og.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://www.mh-material-calculate.net/site-img-og.jpg"
        />
      </Head>
    </>
  )
}

export default CustomHead
