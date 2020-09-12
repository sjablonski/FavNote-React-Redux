const filterItems = (items, value) =>
  items.filter((item) => item.title.match(new RegExp(value, 'i')));
export default filterItems;
