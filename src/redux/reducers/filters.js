const initialState = {
    sortBy: 'popular',
    category: null,
}

console.log(initialState)

// Тут происходит следующее - создаётся reducer - filters. У него состояние равно initialState - начальному значению. Когда вызывается actiion с типом 'SET_SORT_BY', у нас возращаются все старые значения state и в них заменятеся значение sortBy. В противном случае остается прежнее значение state.
const filters = (state = initialState, action) => {

    if(action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload,
        }
    }
    if(action.type === 'SET_CATEGORY') {
        return {
            ...state,
            category: action.payload,
        }
    }
    return state;
}


export default filters;