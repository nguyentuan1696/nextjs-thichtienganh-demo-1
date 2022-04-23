import { useMemo } from 'react'

export function filterTOC({ toc, minHeadingLevel, maxHeadingLevel }) {
	function isValid(item) {
		return item.level >= minHeadingLevel && item.level <= maxHeadingLevel
	}

	return toc.flatMap((item) => {
		const filteredChildren = filterTOC({
			toc: item.children,
			minHeadingLevel,
			maxHeadingLevel,
		})
		if (isValid(item)) {
			return [
				{
					...item,
					children: filteredChildren,
				},
			]
		} else {
			return filteredChildren
		}
	})
}

// Memoize potentially expensive filtering logic
export function useTOCFilter({
  toc,
  minHeadingLevel,
  maxHeadingLevel,
}) {
  return useMemo(
    () => filterTOC({toc, minHeadingLevel, maxHeadingLevel}),
    [toc, minHeadingLevel, maxHeadingLevel],
  );
}
