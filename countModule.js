export const getCount = () => {
  return localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0;
};

export const setCount = (count) => {
  localStorage.setItem("count", count);
};

export const incrementCount = (count) => {
  return count + 1;
};