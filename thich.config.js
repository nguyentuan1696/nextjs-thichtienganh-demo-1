const announcementBarBackground = `repeating-linear-gradient(35deg,hsl(167, 68%, 85%),hsl(167, 68%, 85%) 20px,hsl(167, 68%, 95%) 10px,hsl(167, 68%, 95%) 40px)`

const config = {
	title: 'Thích Tiếng Anh',
	tagline: 'Dinosaurs are cool',
	url: 'https://thichtienganh.com',
	baseUrl: '/',
	favicon: 'img/favicon.ico',

	themeConfig: {
		announcementBar: {
			id: 'announcementBar-2', // Increment on change
			content: `⭐️ đây là cái chỗ để đặt thông báo`,
			backgroundColor: announcementBarBackground,
			textColor: 'inherit',
			isCloseable: true,
		},
		navbar: {
			hideOnScroll: true,
			title: 'Thích Tiếng Anh',
			logo: {
				alt: 'thichtienganh-logo',
				src: 'img/logo.svg',
				href: '/',
				height: 32,
				width: 32
			},
			items: [
				{
					type: 'doc',
					docId: 'intro',
					position: 'left',
					label: 'Tutorial',
				},
				{ to: '/blog', label: 'Blog', position: 'left' },
				{
					href: 'https://github.com/facebook/docusaurus',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Tutorial',
							to: '/docs/intro',
						},
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Stack Overflow',
							href: 'https://stackoverflow.com/questions/tagged/docusaurus',
						},
						{
							label: 'Discord',
							href: 'https://discordapp.com/invite/docusaurus',
						},
						{
							label: 'Twitter',
							href: 'https://twitter.com/docusaurus',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: '/blog',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/facebook/docusaurus',
						},
					],
				},
				{
					title: 'More',
					items: [
						{
							label: 'Blog',
							to: '/blog',
						},
						{
							label: 'GitHub',
							href: 'https://github.com/facebook/docusaurus',
						},
						{
							html: `

              `,
						},
					],
				},
			],
			copyright: `Bản quyền &#169; 2016 &#8211; ${new Date().getFullYear()} ❤️ Thích Tiếng Anh.`,
		},
	},
}

module.exports = config
