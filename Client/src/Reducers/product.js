const initialState = {
  list: [],
  active: null,
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const newList = { ...state.list };
      newList.push(action.payload);
      return { ...state, list: newList };
    }
    case "SET_PRODUCTS":
      return { ...state, list: action.payload };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        list: state.list.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};
