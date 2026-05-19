import { useCallback, useEffect, useRef } from "react";

export function useDebounce(delay = 500) {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debounce = useCallback(
    <Args extends unknown[]>(
      callback: (...args: Args) => void,
      ...args: Args
    ) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [delay],
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { debounce };
}
