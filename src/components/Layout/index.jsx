import clsx from 'clsx'

import Navbar from '../Navbar'
import AnnouncementBar from '../AnnouncementBar'
import Footer from '../Footer'

import styles from './styles.module.css'
import useKeyboardNavigation from '../../hooks/useKeyboardNavigation'

const Layout = ({ children, wrapperClassName, pageClassName }) => {
  useKeyboardNavigation()
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <div
        className={clsx(
          styles['main-wrapper'],
          wrapperClassName,
          pageClassName,
        )}>
        {children}
      </div>

      <Footer />
    </>
  )
}

export default Layout
