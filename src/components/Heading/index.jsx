import clsx from 'clsx'
import { useThemeConfig } from '@/utils/useThemeConfig'
import styles from './styles.module.css'

function AnchorHeading({ as: As, id, ...props }) {
	const {
		navbar: { hideOnScroll },
	} = useThemeConfig()

	if (!id) {
		return <As {...props} />
	}

	return (
		<As
			{...props}
			className={clsx('anchor', {
				[styles.anchorWithHideOnScrollNavbar]: hideOnScroll,
				[styles.anchorWithStickyNavbar]: !hideOnScroll,
			})}
			id={id}>
			{props.children}
			<a
				className={clsx(styles["hash-link"])}
				href={`#${id}`}
				>
				&#8203;
			</a>
		</As>
	)
}

export default function Heading({ as, ...props }) {
	if (as === 'h1') {
		return (
			<h1
				{...props}
				id={undefined} // h1 headings do not need an id because they don't appear in the TOC
			>
				{props.children}
			</h1>
		)
	}
	return <AnchorHeading as={as} {...props} />
}
