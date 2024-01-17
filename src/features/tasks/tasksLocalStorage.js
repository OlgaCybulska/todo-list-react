const localStorageKey = "tasks";
const tasksFromLocalStorage = localStorage.getItem(localStorageKey);

export const saveTasksInLocalStorage = (tasks) =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () => {
  if (!tasksFromLocalStorage) {
    return [];
  }
  JSON.parse(tasksFromLocalStorage);
};
