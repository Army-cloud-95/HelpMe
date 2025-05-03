// utils/storage.js

/**
 * Save data to localStorage.
 * @param {string} key - The key under which the data is stored.
 * @param {*} value - The value to store, will be stringified.
 */
export const saveData = async (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error('Error saving data to localStorage:', err);
    }
  };
  
  /**
   * Retrieve data from localStorage.
   * @param {string} key - The key of the stored data.
   * @returns {*} - The parsed data or null if not found.
   */
  export const getData = async (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (err) {
      console.error('Error reading data from localStorage:', err);
      return null;
    }
  };
  