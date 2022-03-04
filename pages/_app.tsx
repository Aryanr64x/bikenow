import '../styles/globals.css'
import type { AppProps } from 'next/app'




// Initialize Firebase

// const analytics = getAnalytics(app);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
