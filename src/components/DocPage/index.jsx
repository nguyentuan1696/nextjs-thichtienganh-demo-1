import { useState, useCallback } from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import clsx from 'clsx'
import Seo from '@/components/Seo'
import ArticleSchema from '@/components/Schema/ArticleSchema'
import Layout from '@/components/Layout'
import DocSidebar from '@/components/DocSidebar'
import DocItem from '@/components/DocItem'
import styles from './styles.module.css'
import components  from '@/components/MDXComponents'

const DocPageContent = ({ doc }) => {
  const MDXComponent = useMDXComponent(doc.body.code)
  const [hiddenSidebarContainer, setHiddenSidebarContainer] = useState(false)
  const [hiddenSidebar, setHiddenSidebar] = useState(false)
  const toggleSidebar = useCallback(() => {
    if (hiddenSidebar) {
      setHiddenSidebar(false)
    }

    setHiddenSidebarContainer((value) => !value)
  }, [hiddenSidebar])
  return (
		<Layout wrapperClassName={styles['docs-wrapper']}>
			<div className={clsx(styles.docPage)}>
				<aside className={clsx(styles.docSidebarContainer)}>
					<DocSidebar />
				</aside>
				<main className={clsx(styles.docMainContainer)}>
					<div
						className={clsx(
							'container',
							'padding-top--md',
							'padding-bottom--lg',
							styles.docItemWrapper,
						)}>
						<DocItem>
							<MDXComponent components={components} />
						</DocItem>
					</div>
				</main>
			</div>
		</Layout>
	)
}

const Docpage = ({ doc }) => {
  return (
		<>
			<Seo
				title={doc.title}
				description={doc.description}
				keywords={doc.keywords}
				slug={doc.slug}
			/>
			<ArticleSchema
				title={doc.title}
				keywords={doc.keywords}
				slug={doc.slug}
				created_time={doc.created_time}
				last_edited_time={doc.last_edited_time}
			/>
			<DocPageContent doc={doc} />
		</>
	)
}

export default Docpage
