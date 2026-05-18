import { useState, useEffect } from "react";

export const useDebounce = (value: string) => {
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);
  return debouncedQuery;
};
