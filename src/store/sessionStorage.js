export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('store');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    sessionStorage.clear();
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('store', serializedState);
  } catch (err) {
    // err
  }
};
