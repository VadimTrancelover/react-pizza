import { combineReducers } from 'redux';
import filtersReducer from './filters';
import pizzasReducer from './pizzas';


const rootReducer = combineReducers({
    filters: filtersReducer,
    pizzas: pizzasReducer,
});

console.log(rootReducer)


export default rootReducer;