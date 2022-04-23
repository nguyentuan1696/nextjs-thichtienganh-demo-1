const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { withContentlayer } = require('next-contentlayer')
const redirects = require('./redirects')

const moduleExports = {
	// your existing module.exports
	poweredByHeader: false,
	trailingSlash: false,
	swcMinify: true,
	reactStrictMode: true,
	images: {
		formats: ['image/avif', 'image/webp'],
	},
	experimental: {
		urlImports: [],
	},

	pwa: {
		dest: 'public',
		runtimeCaching,
		disable: process.env.NODE_ENV === 'development',
	},

	webpack: (config, { dev, isServer }) => {
		// Replace React with Preact only in client production build
		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat', // Must be below test-utils
			})
		}

		return config
	},

	async redirects() {
		return redirects
	},
}

module.exports = withPWA(withContentlayer()(moduleExports))
