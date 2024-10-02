export function getFromLocalStorage<T>(key: string): T | void {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch {
    return;
  }
}

export function setToLocalStorage<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log("Error!");
  }
}

export function removeFromLocalStorage(key: string) {
  localStorage.removeItem(key);
}
