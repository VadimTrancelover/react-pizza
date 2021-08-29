import React from "react";
import {Categories, SortPopup, PizzaBlock} from '../components';

function Home({items}) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(item) => console.log(item)}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          items.map((obj) => <PizzaBlock key={`${obj.id}`} name={obj.name} imageUrl={obj.imageUrl}  />)
        }
      </div>
    </div>
  );
}

export default Home;
