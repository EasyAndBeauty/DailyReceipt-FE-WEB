import { useCallback, useState } from "react";

/**
 * useLocalStorage hook
 *
 * @param {string} key - localStorage key
 * @param {any} initialValue - initial value
 *
 * @returns {array} [value, setValue, getValue] - [value, setValue, getValue]

 */
export default function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const getValue = useCallback(
    (date) => {
      try {
        const item = window.localStorage.getItem(date);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    },
    [initialValue]
  );

  const setValue = (value, key) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      getValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, getValue];
}
