import { useContext } from 'react'
import { Context } from '@/hooks/browserContext'

export default function useIsBrowser() {
	return useContext(Context)
}
