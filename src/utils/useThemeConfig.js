import useThichContext from '@/utils/useThichContext'

export function useThemeConfig() {
	return useThichContext().siteConfig.themeConfig
}
