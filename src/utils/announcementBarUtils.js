import {
	useState,
	useEffect,
	useCallback,
	useMemo,
	useContext,
	createContext,
} from 'react'

import useIsBrowser from '@/hooks/useIsBrowser'
import { createStorageSlot } from '@/utils/storageUtils'
import { useThemeConfig } from '@/utils/useThemeConfig'

export const AnnouncementBarDismissStorageKey =
  'thich.announcement.dismiss';
const AnnouncementBarIdStorageKey = 'thich.announcement.id';

const AnnouncementBarDismissStorage = createStorageSlot(
  AnnouncementBarDismissStorageKey,
);
const IdStorage = createStorageSlot(AnnouncementBarIdStorageKey);

const isDismissedInStorage = () =>
  AnnouncementBarDismissStorage.get() === 'true';
const setDismissedInStorage = (bool) =>
  AnnouncementBarDismissStorage.set(String(bool));


const useAnnouncementBarContextValue = () => {
  const {announcementBar} = useThemeConfig();
  const isBrowser = useIsBrowser();

  const [isClosed, setClosed] = useState(() =>
    isBrowser
      ? // On client navigation: init with localstorage value
        isDismissedInStorage()
      : // On server/hydration: always visible to prevent layout shifts (will be hidden with css if needed)
        false,
  );
  // Update state after hydration
  useEffect(() => {
    setClosed(isDismissedInStorage());
  }, []);

  const handleClose = useCallback(() => {
    setDismissedInStorage(true);
    setClosed(true);
  }, []);

  useEffect(() => {
    if (!announcementBar) {
      return;
    }
    const {id} = announcementBar;

    let viewedId = IdStorage.get();

    // retrocompatibility due to spelling mistake of default id
    // see https://github.com/facebook/docusaurus/issues/3338
    if (viewedId === 'annoucement-bar') {
      viewedId = 'announcement-bar';
    }

    const isNewAnnouncement = id !== viewedId;

    IdStorage.set(id);

    if (isNewAnnouncement) {
      setDismissedInStorage(false);
    }

    if (isNewAnnouncement || !isDismissedInStorage()) {
      setClosed(false);
    }
  }, [announcementBar]);

  return useMemo(
    () => ({
      isActive: !!announcementBar && !isClosed,
      close: handleClose,
    }),
    [announcementBar, isClosed, handleClose],
  );
};

const AnnouncementBarContext = createContext(null);

export function AnnouncementBarProvider({
  children,
}){
  const value = useAnnouncementBarContextValue();
  return (
    <AnnouncementBarContext.Provider value={value}>
      {children}
    </AnnouncementBarContext.Provider>
  );
}

export const useAnnouncementBar = () => {
  const api = useContext(AnnouncementBarContext);
  if (!api) {
    throw new Error(
      'useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree',
    );
  }
  return api;
};
