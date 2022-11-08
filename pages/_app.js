import '@styles/globals.css'

/**Import font 'Inter' to project */
import { Inter } from '@next/font/google'

/**Add different font weight to project */
const inter = Inter({
  weight: ['400', '700', '500'],
  subsets: ['latin']
})

function Profiles({ Component, pageProps }) {
  return (
    /**Add font 'Inter' to project */
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  )
}

export default Profiles
