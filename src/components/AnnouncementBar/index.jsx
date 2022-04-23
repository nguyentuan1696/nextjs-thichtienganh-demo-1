import clsx from 'clsx'
import styles from './styles.module.css'
import IconClose from '@/components/IconClose'
import { useThemeConfig } from '@/utils/useThemeConfig'
import { useAnnouncementBar } from '@/utils/announcementBarUtils'

const AnnouncementBar = () => {
	const { isActive, close } = useAnnouncementBar()
	const { announcementBar } = useThemeConfig()

	if (!isActive) {
		return null
	}

	  const {content, backgroundColor, textColor, isCloseable} = announcementBar;


	return (
		<div
			style={{ background: backgroundColor, color: textColor }}
			className={styles.announcementBar}
			role="banner">
			{isCloseable && <div className={styles.announcementBarPlaceholder} />}
			<div
				className={styles.announcementBarContent}
				// Developer provided the HTML, so assume it's safe.
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{ __html: content }}
			/>
			{isCloseable ? (
				<button
					className={clsx('clean-btn', 'close', styles.announcementBarClose)}
					onClick={close}>
					<IconClose width={14} height={14} strokeWidth={3.1} />
				</button>
			) : null}
		</div>
	)
}

export default AnnouncementBar
