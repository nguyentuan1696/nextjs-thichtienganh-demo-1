import {createContext} from 'react'
import siteConfig from '@/../thich.config'

const contextValue = {
	siteConfig,
}

export const Context = createContext(contextValue)

export const ThichContextProvider = ({ children }) => {
	return <Context.Provider value={contextValue}>{children}</Context.Provider>
}

