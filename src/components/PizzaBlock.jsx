import React, { useEffect } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

function PizzaBlock({ name, imageUrl, price, types, sizes }) {

    console.log(name,sizes)
  const typesNames = ["тонкое", "традиционное"];
  const sizesNames = [26, 30, 40];
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);


  const onActiveType = (index) => {
      setActiveType(index)
  }

  const onActiveSize = (index) => {
      setActiveSize(index)
  } 

  useEffect(() => {
    console.log(activeType)
  }) 


  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
            {
            typesNames.map((type, index) =>
                 <li key={`${index}`}
                    onClick={() => onActiveType(index)}
                    className={classNames({
                        'active': activeType === index, // проверка с помощью библиотеки classNames - если activeType равен индексу, тогда назначается класс activeType
                        'disable': !types.includes(index), // сдесь проверка, если же в пришедшие из пропсов типы не содержат опредённый индекс, тогда назначается класс 'disabled'
                    })}>
                        {type}
                </li>
                )
            }
        </ul>
        <ul>
        {
            sizesNames.map((size, index) =>
                 <li key={`${index}`}
                    onClick={() => onActiveSize(index)}
                    className={classNames({
                        'active': activeSize === index, // проверка с помощью библиотеки classNames - если activeType равен индексу, тогда назначается класс activeType
                        'disable': !sizes.includes(size), // сдесь проверка, если же в пришедшие из пропсов типы не содержат опредённый размер, тогда назначается класс 'disabled'
                    })}>
                        {size} см.
                </li>
                )
            }
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
}

PizzaBlock.propTypes = { // при помощи PropTypes мы осуществляем проверку переменных на их тип, чтобы при указании неверного типа переменной нам написало об этом в ошибке. Указание типизации
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
}

PizzaBlock.defaultProps = {  //при помощи defaultProps мы указываем значение переменных по умолчанию в наших компонентах, чтобы в случае, если мы не передали какую либо из них, нащ компонент не сломался, и не выпал в ошибку, а подставил значение по умолчанию
    name: '---',
    price: 0, 
    types: [],
    sizes: [],
}

export default PizzaBlock;
