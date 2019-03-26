const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ],
  orderHistory: {
    order1: "Capuccino",
    order2: "Latte",
    order3: "Ice-Latte"
  }
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;
