import {useRef} from 'react'
import styles from './styles.module.css'

function programmaticFocus(el) {
  el.setAttribute('tabindex', '-1')
  el.focus()
  el.removeAttribute('tabindex')
}

const SkipToContent = () =>
{
  const containerRef = useRef(null)
  
    const handleSkip = (e) => {
      e.preventDefault()

      const targetElement =
        document.querySelector('main:first-of-type') ||
        document.querySelector('.main-wrapper')

      if (targetElement) {
        programmaticFocus(targetElement)
      }
    }


  return (
    <p>skipToContent</p>
  )
}

export default SkipToContent