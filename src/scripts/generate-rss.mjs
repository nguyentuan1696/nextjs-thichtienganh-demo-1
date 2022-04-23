import { writeFileSync } from 'fs'
import RSS from 'rss'
import { allDocs } from '.contentlayer/data'

console.log(allDocs)

async function generate() {
	const feed = new RSS({
		title: 'Thích Tiếng Anh',
		site_url: 'https://thichtienganh.com',
		feed_url: 'https://thichtienganh.com/feed.xml',
	})

	allDocs.map((post) => {
		feed.item({
			title: post.title,
			url: `https://thichtienganh.com/bai-hoc/${post.slug}`,
			description: post.description,
		})
	})

	writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
