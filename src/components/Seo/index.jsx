/**
 * @fileoveriew Minimal entrypoint for a page on web.dev.
 * This will include things like the SideNav, Search, Header, etc.
 */

import Head from 'next/head'
import { useTitleFormatter } from '@/utils/generalUtils'

const Seo = ({ title, description, keywords, image, slug }) => {
  const baseUrl = 'https://thichtienganh.com/'
  const pageTitle = useTitleFormatter(title)
  return (
    <div>
      <Head>
        {title && <title>{pageTitle}</title>}
        {title && <meta property="og:title" content={pageTitle} />}
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {keywords && <meta name="keywords" content={keywords} />}
        {/* TODO:
    add meta image */}
        {image && <meta property="og:image" content={image} />}
        {image && <meta name="twitter:image" content={pageImage} />}

        {slug && <link rel="canonical" href={`${baseUrl}${slug}/`} />}

        <meta property="og:type" content="article" />
        <meta property="og:locale" content="vi_VN" />
        <meta name="author" content="Thích Tiếng Anh" />
        <meta name="copyright" content="Thích Tiếng Anh " />
        <meta name="robots" content="index, follow"></meta>
      </Head>
    </div>
  )
}

export default Seo
