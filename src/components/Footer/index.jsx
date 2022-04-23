import React from 'react'
import Link from 'next/link'
import isInternalUrl from '@/utils/isInternalUrl'
import IconExternalLink from '@/components/IconExternalLink'
import ThemedImage from '../ThemedImage'
import styles from './styles.module.css'
import clsx from 'clsx'
import useBaseUrl from '@/hooks/useBaseUrl'
import { useThemeConfig } from '@/utils/useThemeConfig'

const FooterLink = ({ to, href, label, prependBaseUrlToHref, ...props }) =>
{
	const toUrl = useBaseUrl(to)
	const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true })
	return (
		<Link
			{...(href
				? {
						href: prependBaseUrlToHref ? normalizedHref : href,
				  }
				: {
						href: toUrl,
				  })}
			{...props}>
			<a className={clsx(styles['footer__link-item'])}>
				{href && !isInternalUrl(href) ? (
					<span>
						{label}
						<IconExternalLink />
					</span>
				) : (
					label
				)}
			</a>
		</Link>
	)
}

const FooterLogo = (props) => {
	return <ThemedImage src={props.src} alt={props.alt} />
}

const Footer = () => {
	const { footer } = useThemeConfig()
	const { copyright, links = [], logo = {} } = footer || {}

	if (!footer) {
		return null
	}

	return (
		<footer className={clsx(styles.footer)}>
			<div className={clsx('container')}>
				{links && links.length > 0 && (
					<div className={clsx('row', styles.footer__links)}>
						{links.map((linkItem, i) => (
							<div className={clsx('col', styles.footer__col)} key={i}>
								{linkItem.title != null ? (
									<div className={clsx(styles.footer__title)}>
										{linkItem.title}
									</div>
								) : null}
								{linkItem.items != null &&
								Array.isArray(linkItem.items) &&
								linkItem.items.length > 0 ? (
									<ul className={clsx(styles.footer__items)}>
										{linkItem.items.map((item, key) =>
											item.html ? (
												<li
													key={key}
													className={clsx(styles.footer__items)}
													// Developer provided the HTML, so assume it's safe.
													// eslint-disable-next-line react/no-danger
													dangerouslySetInnerHTML={{
														__html: item.html,
													}}
												/>
											) : (
												<li
													key={item.href || item.to}
													className={clsx(styles.footer__item)}>
													<FooterLink {...item} />
												</li>
											),
										)}
									</ul>
								) : null}
							</div>
						))}
					</div>
				)}

				{(logo || copyright) && (
					<div className={clsx(styles.footer__bottom, 'text--center')}>
						{copyright ? (
							<div
								className={clsx(styles.footer_copyright)}
								dangerouslySetInnerHTML={{
									__html: copyright,
								}}></div>
						) : null}
					</div>
				)}
			</div>
		</footer>
	)
}

export default React.memo(Footer)
