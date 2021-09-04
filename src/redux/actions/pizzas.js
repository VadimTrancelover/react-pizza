export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})


export const fetchPizzas = () => (dispatch) => {
    dispatch(setLoaded(false))
    fetch('http://localhost:3004/pizzas')
    .then((res) => res.json())
    .then((json) => {
        dispatch(setPizzas(json));
    });
}

export const setPizzas = (items) => (
    {
    type: 'SET_PIZZAS',
    payload: items,
    }
)