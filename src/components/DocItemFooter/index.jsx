import clsx from 'clsx'
import styles from './styles.module.css'

import EditThisPage from '@/components/EditThisPage'
import LastUpdated from '@/components/LastUpdated'


const EditMetaRow = () =>
{
  return (
    <div className={clsx('row')}>
      <div className={clsx('col')}><EditThisPage /></div>
      <div className={clsx('col', styles.lastUpdated)}><LastUpdated /></div>
    </div>
  )
}

const DocItemFooter = () => {
  return (
    <footer className={clsx(styles['tram-oi-anh-yeu-em'])}>
      <EditMetaRow />
    </footer>
  )
}

export default DocItemFooter
