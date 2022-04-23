import { createContext, useEffect, useState } from 'react'

export const Context = createContext(false)

export function BrowserContextProvider({ children }) {
	const [isBrowser, setIsBrowser] = useState(false)

	useEffect(() => {
		setIsBrowser(true)
	}, [])

	return <Context.Provider value={isBrowser}>{children}</Context.Provider>
}
