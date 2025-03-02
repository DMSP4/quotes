function localStorageSetItem(key, value) {
  if (typeof key !== "string") {
    console.error("Error: The key must be a string");
    return;
  }

  try {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.error("Failed to set item in localStorage", error);
  }
}

function localStorageGetItem(key) {
  const value = localStorage.getItem(key);
  try {
    return value ? JSON.parse(value) : null;
  } catch {
    return value;
  }
}

function localStorageRemoveItem(key) {
  localStorage.removeItem(key);
}

function localStorageClear() {
  localStorage.clear();
}

export {
  localStorageSetItem,
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageClear,
};
