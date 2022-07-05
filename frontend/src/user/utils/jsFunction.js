export const isEmptyObject = (object) => {
  return Object.keys(object).length === 0 && object.constructor === Object;
};

export const arrayIsEmpty = (arr) => {
  if (!Array.isArray(arr)) {
    return false;
  }
  return arr.length === 0;
};

export const isEmpty = (value) => {
  if (
    value === '' ||
    value === null ||
    value === undefined ||
    (value !== null && typeof value === 'object' && !Object.keys(value).length)
  ) {
    return true;
  } else {
    return false;
  }
};
