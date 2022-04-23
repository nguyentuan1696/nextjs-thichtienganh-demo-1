export function hasProtocol(url) {
	return /^(\w*:|\/\/)/.test(url) === true
}

export default function isInternalUrl(url) {
	return typeof url !== 'undefined' && !hasProtocol(url)
}
