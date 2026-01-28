import { useRef, useEffect, useCallback } from "react";

export const useDebounce = (callback, delay) => {
  const timeoutRef = useRef(null); // useRef to hold the timeout ID without causing re-renders

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current); // Clear timeout on unmount
    };
  }, []);//useEffect with [] runs only on unmount to clear any pending timeouts

  return useCallback((...args) => { // useCallback to memorize the debounced function
    if (timeoutRef.current) { // If there's an existing timeout, clear it
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => { // Set a new timeout
      callback(...args); // Call the original callback with arguments
    }, delay); // after the specified delay
  }, [callback, delay]);
}