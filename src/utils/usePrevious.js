import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from '@/utils/reactUtils'

export function usePrevious(value) {
  const ref = useRef();

  useIsomorphicLayoutEffect(() => {
    ref.current = value;
  });

  return ref.current;
}
