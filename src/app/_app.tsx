import type { AppProps } from 'next/app'
import "./global.css"

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <div className="navContainer">
                EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
            </div>
            <Component {...pageProps} />
        </div>
    )
}