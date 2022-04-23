import clsx from 'clsx'
import useWindowSize from '@/hooks/useWindowSize'
import TOC from '@/components/TOC'
import DocPaginator from '@/components/DocPaginator'
import styles from './styles.module.css'
import DocItemFooter from '@/components/DocItemFooter'
import Heading from '@/components/Heading'

const DocItem = (props) =>
{
	// const { content: DocContent } = props
	// const { metadata, frontMatter } = DocContent
	// const { description, title } = metadata
	const windowSize = useWindowSize()
	const renderTocDesktop = (windowSize === 'desktop' || windowSize === 'ssr')
  return (
		<>
			<div className={clsx('row')}>
				<div className={clsx('col', styles.docItemCol)}>
					<div className={clsx(styles.docItemContainer)}>
						<article>
							<div className={clsx('markdown')}>{props.children}</div>
							<DocItemFooter />
						</article>
						<DocPaginator />
					</div>
				</div>
				{renderTocDesktop && (
					<div className="col col--3">
						<TOC

						/>
					</div>
				)}
			</div>
		</>
	)
}

export default DocItem
