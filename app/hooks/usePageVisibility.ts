import React, { useCallback, useState } from "react";

export function usePageVisibility() {
  const [isVisible, setIsVisible] = useState(true);
  const onVisibilityChange = useCallback(
    () => setIsVisible(document.hidden),
    []
  );

  React.useEffect(() => {
    document.addEventListener("visibilitychange", onVisibilityChange, false);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  });

  return isVisible;
}
