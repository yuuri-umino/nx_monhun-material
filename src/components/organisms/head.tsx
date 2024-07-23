import Head from 'next/head'

interface CustomHeadProps {
  title: string
  description: string
}

const CustomHead = ({ title, description }: CustomHeadProps) => {
  return (
    <>
      <Head>
        <title>{`${title} | `}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
    </>
  )
}

export default CustomHead
