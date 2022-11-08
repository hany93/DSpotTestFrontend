import '../styles/globals.css'
import { Inter } from '@next/font/google'
const inter = Inter({
  weight: ['400', '700', '500'],
  subsets: ['latin']
})

function Profiles({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  )
}

export default Profiles
