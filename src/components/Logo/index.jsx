import Link from 'next/link'
import clsx from 'clsx'
import useBaseUrl from '@/hooks/useBaseUrl'
import useThichContext from '@/utils/useThichContext'
import { useThemeConfig } from '@/utils/useThemeConfig'
import ThemedImage from '@/components/ThemedImage'

const Logo = (props) => {
	const {
		siteConfig: { title },
	} = useThichContext()
	const {
		navbar: { title: navbarTitle, logo = { src: '' } },
	} = useThemeConfig()


	const { className,imageClassName, titleClassName, ...propsRest } = props
  const logoLink = useBaseUrl(logo.href || '/')
	  const sources = useBaseUrl(logo.src)
	  const themedImage = (
			<ThemedImage
				src={sources}
				height={logo.height}
				width={logo.width}
				alt={logo.alt || navbarTitle || title}
			/>
		)

	return (
		<Link href={logoLink}>
			<a className={className}>
				{logo.src &&
					(imageClassName ? (
						<div className={imageClassName}>{themedImage}</div>
					) : (
						themedImage
					))}
				{navbarTitle != null && <b className={titleClassName}>{navbarTitle}</b>}
			</a>
		</Link>
	)
}

export default Logo
