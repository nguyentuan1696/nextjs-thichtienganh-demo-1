import {
	useState,
	ReactNode,
	useContext,
	createContext,
	useEffect,
	ComponentType,
	useMemo,
} from 'react'

function useContextValue() {
	return useState(null)
}

const Context = createContext(null)

export function useMobileSecondaryMenuRenderer()
{
	
}
