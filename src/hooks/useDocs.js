

export const useActivePlugin = (
	options = {},
) => {
	const data = useAllDocsData()
	const { pathname } = useLocation()
	return getActivePlugin(data, pathname, options)
}
