export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})


export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch(setLoaded(false))

    fetch(`http://localhost:3004/pizzas?${category !== null ? `category=${category}` : '' }&_sort=${sortBy.type}&_order=${sortBy.order}`)
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