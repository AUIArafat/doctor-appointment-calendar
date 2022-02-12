export const storageData = {
  setValue(key: string, value: string | {}) {
    return localStorage.setItem(key, JSON.stringify(value));
  },
  getValue(key: string) {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return null;
  },
};
