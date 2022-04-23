const StorageTypes = ['localStorage', 'sessionStorage', 'none']

const DefaultStorageType = 'localStorage'

// Will return null browser storage is unavailable
function getBrowserStorage(storageType = DefaultStorageType) {
	if (typeof window === 'undefined') {
		throw new Error('Browser storage is not available on Node.js SSR process.')
	}
	if (storageType === 'none') {
		return null
	} else {
		try {
			return window[storageType]
		} catch (e) {
			logOnceBrowserStorageNotAvailableWarning(e)
			return null
		}
	}
}

/**
 * Poor man's memoization to avoid logging multiple times the same warning
 * Sometimes, localStorage/sessionStorage is unavailable due to browser policies
 */

let hasLoggedBrowserStorageNotAvailableWarning = false

function logOnceBrowserStorageNotAvailableWarning(error) {
	if (!hasLoggedBrowserStorageNotAvailableWarning) {
		console.warn(
			`Browser storage is not available.
Possible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.`,
			error,
		)
		hasLoggedBrowserStorageNotAvailableWarning = true
	}
}

const NoopStorageSlot = {
	get: () => null,
	set: () => {},
	del: () => {},
}

//  Fail-fast, as storage APIs should not be used during the SSR process
function createServerStorageSlot(key) {
	function throwError() {
		throw new Error(`Illegal storage API usage for storage key "${key}".
Thich storage APIs are not supposed to be called on the server-rendering process.
Please only call storage APIs in effects and event handlers.`)
	}

	return {
		get: throwError,
		set: throwError,
		del: throwError,
	}
}

/**
 * Creates an object for accessing a particular key in localStorage.
 */
export const createStorageSlot = (key, options) => {
	if (typeof window === 'undefined') {
		return createServerStorageSlot(key)
	}
	const browserStorage = getBrowserStorage(options?.persistence)
	if (browserStorage === null) {
		return NoopStorageSlot
	}
	return {
		get: () => {
			try {
				return browserStorage.getItem(key)
			} catch (e) {
				console.error(`Thich storage error, can't get key=${key}`, e)
				return null
			}
		},
		set: (value) => {
			try {
				browserStorage.setItem(key, value)
			} catch (e) {
				console.error(`Thich storage error, can't set ${key}=${value}`, e)
			}
		},
		del: () => {
			try {
				browserStorage.removeItem(key)
			} catch (e) {
				console.error(`Thich storage error, can't delete key=${key}`, e)
			}
		},
	}
}

/**
 * Returns a list of all the keys currently stored in browser storage
 * or an empty list if browser storage can't be accessed.
 */
export function listStorageKeys(storageType = DefaultStorageType) {
	const browserStorage = getBrowserStorage(storageType)
	if (!browserStorage) {
		return []
	}

	const keys = []
	for (let i = 0; i < browserStorage.length; i += 1) {
		const key = browserStorage.key(i)
		if (key !== null) {
			keys.push(key)
		}
	}
	return keys
}
