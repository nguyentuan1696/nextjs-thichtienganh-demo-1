import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

const CONTENT_ROOT = '../thichtienganh-content/data'

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
}

const Docs = defineDocumentType(() => ({
	name: 'Docs',
	filePathPattern: 'bai-hoc/**/*.mdx',
	bodyType: 'mdx',
	fields: {
		id: { type: 'string', required: true },
		title: { type: 'string', required: true },
		description: { type: 'string', required: true },
		keywords: { type: 'string', required: true },
		sidebar_label: { type: 'string', required: true },
		last_edited_time: { type: 'string', required: true },
		created_time: { type: 'string', required: true },
	},
	computedFields,
}))

const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: 'bai-viet/**/*.mdx',
  bodyType: 'mdx',
  fields: {
    id: { type: 'string', required: true },
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
  },
  computedFields,
}))

const contentLayerConfig = makeSource({
  contentDirPath: 'data',
  documentTypes: [Docs, Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      // [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
    ],
  },
})

export default contentLayerConfig
