import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppPropsWithLayout } from 'next/app'
import GoogleTagManager, {
  GoogleTagManagerId,
} from '@/components/util/google-tag-manager'

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const googleTagManagerId = process.env
    .NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as GoogleTagManagerId

  return (
    <>
      {process.env.DEPLOY_ENV === 'production' && googleTagManagerId && (
        <GoogleTagManager googleTagManagerId={googleTagManagerId} />
      )}
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
