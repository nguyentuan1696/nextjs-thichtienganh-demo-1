import { useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'
import { useRouter } from 'next/router'
import * as gtag from '@/lib/gtag'
import { ThichContextProvider } from '@/utils/thichContext'
import { BrowserContextProvider } from '@/hooks/browserContext'
import { AnnouncementBarProvider } from '@/utils/announcementBarUtils'
import {ScrollControllerProvider} from '@/utils/scrollUtils'

import '../styles/main.css'

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"
				/>
				<meta name="description" content="Description" />
				<meta name="keywords" content="Keywords" />
				<title>Thích Tiếng Anh|Tự học tiếng anh cùng bạn</title>{' '}
				<link href="../../public/favicon.ico" rel="icon" sizes="any" />
				<link href="../../public/favicon.svg" rel="icon" type="image/svg+xml" />
				<link rel="apple-touch-icon" href="/apple-icon.png"></link>
				<meta name="theme-color" content="#317EFB" />
				<link rel="manifest" href="/manifest.json" />
			</Head>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
			<BrowserContextProvider>
				<AnnouncementBarProvider>
					<ScrollControllerProvider>
						<ThichContextProvider>
							<Component {...pageProps} />
						</ThichContextProvider>
					</ScrollControllerProvider>
				</AnnouncementBarProvider>
			</BrowserContextProvider>
		</>
	)
}

export default MyApp
