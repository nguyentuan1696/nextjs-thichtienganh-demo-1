import { useContext } from 'react'
import {Context} from '@/utils/thichContext'
const useThichContext = () =>
{
	return useContext(Context)

}

export default useThichContext
