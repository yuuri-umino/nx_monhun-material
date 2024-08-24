import Script from 'next/script'
import { FC } from 'react'

export type GoogleTagManagerId = `GTM-${string}`

type Props = {
  googleTagManagerId?: GoogleTagManagerId
}

const GoogleTagManager: FC<Props> = ({ googleTagManagerId }) => {
  // googleTagManagerIdが未指定の場合、環境変数からIDを取得
  const gtmId =
    googleTagManagerId ||
    (process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as GoogleTagManagerId) ||
    ''

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-js"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');`,
        }}
      />
      {/* End Google Tag Manager */}
    </>
  )
}

export default GoogleTagManager
