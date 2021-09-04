import React from "react";
import { fetchPizzas } from '../redux/actions/pizzas' ;
import {Categories, SortPopup, PizzaBlock, LoadingPizzaBlock} from '../components';
import { setCategory } from "../redux/actions/filters";
import { useDispatch, useSelector } from "react-redux";

const categoryNames = ["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
const sortItems = [
  {name:"популярности", type: "popular"},
  {name:"цене", type: "price"},
  {name: "алфавиту",type: "alphabet"}
];

  function Home() {
  const dispatch = useDispatch();
 
  const {items} = useSelector(({pizzas}) => { //делает тоже самое, что и mapStateToProps
    return {
      items: pizzas.items,
    }
  }); //
  const {isLoaded} = useSelector(({pizzas}) => { //делает тоже самое, что и mapStateToProps
    return {
      isLoaded: pizzas.isLoaded,
    }
  }); //
  const {category, sortBy} = useSelector(({filters}) => { //делает тоже самое, что и mapStateToProps
    return {
      category: filters,
      sortBy: filters
    }
  }); //

  React.useEffect(() => {dispatch(fetchPizzas());
  },[category]);
  
  console.log(category, sortBy)

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index))
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onSelectCategory}
          items={categoryNames}
        />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoaded ? items.map((obj) => <PizzaBlock key={`${obj.id}`} isLoading={true} {...obj}  />) : Array(12).fill(0).map(((_, index) => <LoadingPizzaBlock key={index}/>))
        }
      </div>
    </div>
  );
}




export default Home;
