import { useMDXComponent } from 'next-contentlayer/hooks'
import { allBlogs } from '.contentlayer/data'
import mdxcontent from '@/components/MDXComponents'

import Seo from '../../components/Seo'

export default function Docs({ blog }) {
  const MDXContent = useMDXComponent(blog.body.code)

  return (
    <>
      <h1>{blog.title}</h1>

      <MDXContent />
    </>
  )
}

export const getStaticProps = ({ params: { slug = [] } }) => {
  const pagePath = `bai-viet/${slug.join('/')}`
  const blog = allBlogs.find((blog) => blog.slug === pagePath)

  return { props: { blog } }
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((_) => `/${_.slug}`),
    fallback: false,
  }
}
