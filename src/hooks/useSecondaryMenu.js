import React, {useEffect, useCallback, useState} from 'react'
import {usePrevious} from "@/utils/usePrevious";

function useSecondaryMenu({
  sidebarShown,
  toggleSidebar,
}) {
  const content = useMobileSecondaryMenuRenderer()?.({
    toggleSidebar,
  });
  const previousContent = usePrevious(content);

  const [shown, setShown] = useState(
    () =>
      // /!\ content is set with useEffect,
      // so it's not available on mount anyway
      // "return !!content" => always returns false
      false,
  );

  // When content is become available for the first time (set in useEffect)
  // we set this content to be shown!
  useEffect(() => {
    const contentBecameAvailable = content && !previousContent;
    if (contentBecameAvailable) {
      setShown(true);
    }
  }, [content, previousContent]);

  const hasContent = !!content;

  // On sidebar close, secondary menu is set to be shown on next re-opening
  // (if any secondary menu content available)
  useEffect(() => {
    if (!hasContent) {
      setShown(false);
      return;
    }
    if (!sidebarShown) {
      setShown(true);
    }
  }, [sidebarShown, hasContent]);

  const hide = useCallback(() => {
    setShown(false);
  }, []);

  return {shown, hide, content};
}
