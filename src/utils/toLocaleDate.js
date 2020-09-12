const toLocaleDate = (timestamp) => {
  if (navigator && navigator.language) {
    return new Date(timestamp).toLocaleDateString(navigator.language);
  }
  return new Date(timestamp).toLocaleDateString();
};

export default toLocaleDate;
