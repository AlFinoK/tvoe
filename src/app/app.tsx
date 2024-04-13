import { Footer } from '@/widgets/Footer'
import { Header } from '@/widgets/Header'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export function App({ Component, pageProps }: AppProps) {
    return (
        <div className={inter.className}>
            <div className="wrapper">
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
        </div>
    )
}
