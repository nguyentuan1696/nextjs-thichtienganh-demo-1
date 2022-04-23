import clsx from 'clsx'
import { useCollapsible, Collapsible } from '@/components/Collapsible'
import TOCItems from '@/components/TOCItems'
import styles from './styles.module.css'
const TOCCollapsible = ({toc, className, minHeadingLevel, maxHeadingLevel}) =>
{
	  const { collapsed, toggleCollapsed } = useCollapsible({
			initialState: true,
		})
	return (
		<div
			className={clsx(styles.tocCollapsible, {
				[styles.tocCollapsibleExpanded]: !collapsed,
			})}>
			<button
				type="button"
				className={clsx('clean-btn', styles.tocCollapsibleButton)}
				onClick={toggleCollapsed}>
				On this page
			</button>
			<Collapsible
				lazy
				className={styles.tocCollapsibleContent}
				collapsed={collapsed}>
				<TOCItems
					toc={toc}
					minHeadingLevel={minHeadingLevel}
					maxHeadingLevel={maxHeadingLevel}
				/>
			</Collapsible>
		</div>
	)
}

export default TOCCollapsible
