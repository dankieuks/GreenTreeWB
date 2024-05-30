export const addProduct = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};
export const removeProduct = (product) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: product,
  };
};
export const getProduct = (products) => {
  return {
    type: "SET_PRODUCT",
    payload: products,
  };
};
