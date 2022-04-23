import Link from 'next/link'
import clsx from 'clsx'

import styles from './styles.module.css'

const DocPaginator = (props) => {
  const { metadata } = props
  return (
    <nav className={clsx(styles['pagination-nav'], styles['tram-oi-anh-yeu-em'])}>
      <div className={clsx(styles['pagination-nav__item'])}>
        <a href="" className={styles['pagination-nav__link']}>
          <div className={clsx(styles['pagination-nav__sublabel'])}>
            Previous
          </div>
          <div className={clsx(styles['pagination-nav__label'])}>
            « Installation
          </div>
        </a>
      </div>
      <div
        className={clsx(
          styles['pagination-nav__item'],
          styles['pagination-nav__item--next'],
        )}>
        <a href="#" className={clsx(styles['pagination-nav__link'])}>
          <div className={clsx(styles['pagination-nav__sublabel'])}>Next</div>
          <div className={clsx(styles['pagination-nav__label'])}>
            Getting Started »
          </div>
        </a>
      </div>
    </nav>
  )
}
export default DocPaginator
