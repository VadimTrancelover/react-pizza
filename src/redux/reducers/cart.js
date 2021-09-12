// const initialState = {
//   items: {},
//   totalPrice: 0,
//   totalCount: 0,
// };

// const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

// const cart = (state = initialState, action) => {
//   switch (action.type) {
//     case 'ADD_PIZZA_CART': {
//     const currentPizzaItems = !state.items[action.payload.id] ? [action.payload] : [...state.items[action.payload.id].items, action.payload];// в currentPizzaItems создаётся новый обьект, и в этом обьекте берутся все старые данные из items и добавляется новый id, а старое сохранит в начале


//     const newItems = {
//         ...state.items, [action.payload.id]:
//         {
//           items: currentPizzaItems,
//           totalPrice:getTotalPrice(currentPizzaItems),
//         }  
//     };


//     const items = Object.values(newItems).map((obj) => obj.items);
//     const allPizzas = [].concat.apply([], items);
//     const totalPrice = getTotalPrice(allPizzas);
//       return {
//         ...state,
//         items: newItems,
//         totalCount: allPizzas.length,
//         totalPrice,
//         };
//     }
//     case 'REMOVE_CART_ITEM':
//       const newItems = 
//       {...state.items}
//       const currentTotalPrice = newItems[action.payload].totalPrice
//       const currentTotalCount = newItems[action.payload].items.length
//       delete newItems[action.payload]
//       return {
//           ...state,
//           items: newItems ,
//           totalPrice: state.totalPrice - currentTotalPrice,
//           totalCount: state.totalCount - currentTotalCount
//       }

//     case 'CLEAR_CART': 
//       return {
//         totalPrice: 0,
//         totalCount: 0,
//         items: {},
//     }

//     case 'PLUS_CART_ITEM':
//       const plusCartNewItems = [...state.items[action.payload].items,
//       state.items[action.payload].items[0]]

//       const totalPrice = state.totalPrice - currentTotalPrice
//       const totalCount = state.totalCount - currentTotalCount

//       return {
//         ...state,
//         items: {
//           ...state.items,
//           [action.payload]: {
//             items: plusCartNewItems,
//             totalPrice: getTotalPrice(plusCartNewItems),
//           }
//         },
//         totalPrice,
//         totalCount,
//       }

//     case 'MINUS_CART_ITEM':
//       const oldItems = state.items[action.payload].items;
//       const minusCartNewItems = oldItems.length > 1 ? oldItems.slice(1) : oldItems;
//       const newItemsInCart = {
//         ...state.items,
//         [action.payload]: {
//           items: minusCartNewItems,
//           totalPrice: getTotalPrice(minusCartNewItems)
//         }
//       }

//       const totalPriceMinus = state.totalPrice - currentTotalPrice
//       const totalCountMinus = state.totalCount - currentTotalCount


//       return {
//         ...state,
//         items: newItemsInCart,
//         totalPriceMinus,
//         totalCountMinus,
//       }


//     default:
//       return state;
//   }
// };

// export default cart;

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'REMOVE_CART_ITEM': {
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    case 'PLUS_CART_ITEM': {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'MINUS_CART_ITEM': {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    }

    case 'CLEAR_CART':
      return { totalPrice: 0, totalCount: 0, items: {} };

    default:
      return state;
  }
};

export default cart;
