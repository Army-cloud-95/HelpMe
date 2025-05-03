import localforage from "localforage";

// Initialize
localforage.config({
  name: "HelpMeApp",
  storeName: "emergency_data", // IndexedDB store
});

// Set data
export const saveData = async (key, value) => {
  try {
    await localforage.setItem(key, value);
  } catch (err) {
    console.error("Error saving to storage", err);
  }
};

// Get data
export const getData = async (key) => {
  try {
    return await localforage.getItem(key);
  } catch (err) {
    console.error("Error getting from storage", err);
  }
};

// Remove data
export const removeData = async (key) => {
  try {
    await localforage.removeItem(key);
  } catch (err) {
    console.error("Error removing from storage", err);
  }
};
