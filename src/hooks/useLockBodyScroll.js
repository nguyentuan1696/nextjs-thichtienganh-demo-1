import {useEffect} from 'react';

function useLockBodyScroll(lock = true) {
  useEffect(() => {
    document.body.style.overflow = lock ? 'hidden' : 'visible';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [lock]);
}

export default useLockBodyScroll;

