import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppPropsWithLayout } from 'next/app'
import { NextSeo } from 'next-seo'
import GoogleTagManager, {
  GoogleTagManagerId,
} from '@/components/util/google-tag-manager'

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const googleTagManagerId = process.env
    .NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as GoogleTagManagerId

  return (
    <>
      <NextSeo
        titleTemplate={
          'モンスターハンターアイスボーン武器・防具素材計算ツール | MHI素材計算ツール'
        }
      />
      {process.env.DEPLOY_ENV === 'production' && googleTagManagerId && (
        <GoogleTagManager googleTagManagerId={googleTagManagerId} />
      )}
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
