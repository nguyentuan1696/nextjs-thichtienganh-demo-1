const canUseDOM = !!(
	typeof window != 'undefined' &&
	window.document &&
	window.document.createElement
)

const ExecutionEnvironment = {
	canUseDOM,
	canUseEventListeners:
		canUseDOM && !!(window.addEventListener || window.attachEvent),
	canUseIntersectionObserver: canUseDOM && 'IntersectionObserver' in window,

	canUseViewport: canUseDOM && !!window.screen,
}

export default ExecutionEnvironment

