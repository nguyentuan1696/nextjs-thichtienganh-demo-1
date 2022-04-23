import { useCallback, useState, useEffect } from 'react'
import clsx from 'clsx'
import SearchBar from '../SearchBar'
import { useThemeConfig } from '@/utils/useThemeConfig'
import useWindowSize from '@/hooks/useWindowSize'
import useHideableNavbar  from '@/hooks/useHideableNavbar'
import useLockBodyScroll from '@/hooks/useLockBodyScroll'
import styles from './styles.module.css'
import IconMenu from '@/components/IconMenu'
import Logo from '@/components/Logo'

const DefaultNavItemPosition = 'right'

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}

// If split links by left/right
// if position is unspecified, fallback to right (as v1)
function splitNavItemsByPosition(items) {
  const leftItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === 'left',
  );
  const rightItems = items.filter(
    (item) => (item.position ?? DefaultNavItemPosition) === 'right',
  );
  return {
    leftItems,
    rightItems,
  };
}

function useMobileSidebar() {
	const windowSize = useWindowSize()

	// Mobile sidebar not visible on hydration: can avoid SSR rendering
	const shouldRender = windowSize === 'mobile' // || windowSize === 'ssr';

	const [shown, setShown] = useState(false)

	// Close mobile sidebar on navigation pop
	// Most likely firing when using the Android back button (but not only)
	// useHistoryPopHandler(() => {
	// 	if (shown) {
	// 		setShown(false)
	// 		// Should we prevent the navigation here?
	// 		// See https://github.com/facebook/docusaurus/pull/5462#issuecomment-911699846
	// 		return false // prevent pop navigation
	// 	}
	// 	return undefined
	// })

	const toggle = useCallback(() => {
		setShown((s) => !s)
	}, [])

	useEffect(() => {
		if (windowSize === 'desktop') {
			setShown(false)
		}
	}, [windowSize])

	return { shouldRender, toggle, shown }
}

const Navbar = () => {
	const {
		navbar: { hideOnScroll, style },
	} = useThemeConfig()

	const mobileSidebar = useMobileSidebar()
	// const colorModeToggle = useColorModeToggle()
	// const activeDocPlugin = useActivePlugin()
	// const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll)

	const items = useNavbarItems()

	const hasSearchNavbarItem = items.some((item) => item.type === 'search')
	const { leftItems, rightItems } = splitNavItemsByPosition(items)
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll)

	return (
		<nav
			ref={navbarRef}
			className={clsx(
				styles.navbar,
				styles['navbar--fixed-top'],
				styles['navbar--primary'],
				{
					[styles['navbar-sidebar--show']]: mobileSidebar.shown,
					[styles.navbarHideable]: hideOnScroll,
					[styles.navbarHidden]: hideOnScroll && !isNavbarVisible,
				},
			)}>
			<div className={clsx(styles['navbar__inner'])}>
				<div className={clsx(styles['navbar__items'])}>
					{items?.length > 0 && (
						<button
							aria-label="Navigation bar toggle"
							className={clsx(styles['navbar__toggle'], 'clean-btn')}
							type="button"
							tabIndex={0}
							onClick={mobileSidebar.toggle}
							onKeyDown={mobileSidebar.toggle}>
							<IconMenu />
						</button>
					)}
					<Logo
						className={clsx(styles['navbar__brand'])}
						imageClassName={styles['navbar__logo']}
						titleClassName={styles['navbar__title']}
					/>
					{/* {leftItems.map((item, i) => (
						<NavbarItem {...item} key={i} />
					))} */}
					<SearchBar />
				</div>
			</div>
		</nav>
	)
}

export default Navbar
