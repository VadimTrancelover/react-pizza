import React from "react";
import { fetchPizzas } from "../redux/actions/pizzas";
import {
  Categories,
  SortPopup,
  PizzaBlock,
  LoadingPizzaBlock,
} from "../components";
import { addPizzaToCart } from "../redux/actions/cart";
import { setCategory, setSortBy } from "../redux/actions/filters";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();
  const cartItems = useSelector(({cart}) => cart.items);

  const { items } = useSelector(({ pizzas }) => {
    //делает тоже самое, что и mapStateToProps
    return {
      items: pizzas.items,
    };
  }); //
  const { isLoaded } = useSelector(({ pizzas }) => {
    //делает тоже самое, что и mapStateToProps
    return {
      isLoaded: pizzas.isLoaded,
    };
  }); //
  const { category, sortBy } = useSelector(
    (
      { filters } //делает тоже самое, что и mapStateToProps
    ) => filters
  ); //

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj
    })
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          ActiveCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup
          onClickSortType={onSelectSortType}
          activeSortType={sortBy.type}
          items={sortItems}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div
        className={classNames({
          content__items: items,
          content__two_items: items.length === 2,
        })}
      >
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock 
              addedCount = {cartItems[obj.id] && cartItems[obj.id].items.length}
              onClickAddPizza={handleAddPizzaToCart}
              key={`${obj.id}`} 
              isLoading={true} {...obj} />
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => <LoadingPizzaBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
