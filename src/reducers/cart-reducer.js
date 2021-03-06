const cartInitialState = {
  cart: [],
  checkout: "",
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };

    case "REMOVE_FROM_CART":
      return { cart: state.cart.filter((item) => item._id !== action.payload) };
    case "INCREASE_QTY":
      return {
        cart: state.cart.map((item) =>
          item._id === action.payload ? { ...item, qty: item.qty + 1 } : item
        ),
      };

    case "DECREASE_QTY":
      return {
        cart: state.cart.map((item) =>
          item._id === action.payload ? { ...item, qty: item.qty - 1 } : item
        ),
      };
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "CHECKOUT_ORDER":
      return { ...state, checkout: action.payload };
    default:
      return state;
  }
};

export { cartReducer, cartInitialState };
