export const isEmptyObject = (object) => {
  return Object.keys(object).length === 0 && object.constructor === Object;
};

export const arrayIsEmpty = (arr) => {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.length === 0;
};
