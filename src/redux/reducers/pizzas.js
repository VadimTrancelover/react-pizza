const initialState = {
    items: [],
    isLoaded: false
}


// Тут происходит следующее - создаётся reducer - filters. У него состояние равно initialState - начальному значению. Когда вызывается actiion с типом 'SET_SORT_BY', у нас возращаются все старые значения state и в них заменятеся значение sortBy. В противном случае остается прежнее значение state.
const pizzas = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PIZZAS':
            return {
            ...state,
            items: action.payload,
            isLoaded: true,
            };
        case 'SET_LOADED':
            return {
            ...state,
            isLoaded: action.payload
            }
        default:
            return state;
    }
}


export default pizzas;