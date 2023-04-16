const initialState = {
  authToken: null,
  count: 0,
  price: 0,
};

const payReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_IN_COUNT_SUCCESS':
      return {
        ...state,
        count: action.payload,
      };
    case 'COUNT_TOTALPRICE_SUCCESS':
      return {
        ...state,
        price: action.payload,
      };
    default:
      return state;
  }
};

export default payReducer;
