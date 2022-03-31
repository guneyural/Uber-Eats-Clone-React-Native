let defaultState = {
  selectedItems: {items: [], restaurantName: ''},
};

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        selectedItems: action.payload.checkboxValue
          ? {
              items: [...state.selectedItems.items, action.payload],
              restaurantName: action.payload.restaurantName,
            }
          : {
              items: [
                ...state.selectedItems.items.filter(
                  item => item.title !== action.payload.title,
                ),
              ],
              restaurantName: action.payload.restaurantName,
            },
      };
    default:
      return state;
  }
};

export default cartReducer;
