import clsx from "clsx";
import * as React from "react";

const PreloadContext = React.createContext(false);

export function PreloadProvider({ children }) {
  /** If the dom is loaded */
  const [preloaded, setIsPreloaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsPreloaded(true);
    }, 200);
  }, []);

  return (
    <PreloadContext.Provider value={preloaded}>
      <div
        className={clsx(
          "fixed inset-0 flex items-center justify-center bg-white transition-opacity dark:bg-dark",
          preloaded && "pointer-events-none opacity-0"
        )}
      />
      {children}
    </PreloadContext.Provider>
  );
}

export const usePreloadState = () => React.useContext(PreloadContext);
