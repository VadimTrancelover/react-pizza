import React,{useState, useEffect, useRef} from 'react';
import PropTypes from "prop-types";



const SortPopup = React.memo(function SortPopup({items, onClickSortType, activeSortType}) { //useMemo следит за тем, меняются ли ссылка в компоненте, если же она не меняется, тогда ререндер компонента не происходит

  const [visiblePopup, setVisiblePopup] = useState(false);
  const activelabel = items.find((obj) =>  obj.type === activeSortType).name;
  const sortRef = useRef(); // этот хук нужен для того, чтобы хранить всегда актуальные значения

  const onSelectItem = (index) => {
    onClickSortType(index)
    setVisiblePopup(false)
  }

  const toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup)
  }

  const handleOutsideClicked = (e) => { 
    const path =
     e.path || (e.composedPath && e.composedPath());;// 
    if(!path.includes(sortRef.current)) {
      setVisiblePopup(false)
    };
  };

  useEffect(() => { // данный хук отслеживает состояние компонента, и при каждом изменении состояния компонента выполняет функцию, которую мы записываем в хук.
    document.body.addEventListener('click', handleOutsideClicked);
  }, []);


  return (
      <div 
        ref = {sortRef}
        className="sort">
            <div className="sort__label">
              <svg 
                className = {visiblePopup ? 'rotated' : ''}
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                  fill="#2C2C2C"
                />
              </svg>
              <b>Сортировка по:</b>
              <span onClick={toggleVisiblePopup}>{activelabel}</span>
            </div> 
            {/* для того, чтобы отобразить элемент верстки или скрыть его, мы ставим перед вёрсткой переменную, которая в зависимости от логики принимает true или false.Далее используем логический элемент И(&&) И если переменная true, то вёрстка отображается, если false то нет*/}
            {visiblePopup && (
            <div className="sort__popup"> 
              <ul>
                {items && 
                  items.map((obj, index) => (
                  <li
                    className = {activeSortType === obj.type ? 'active' : ''}// тут передаётся в класс li 'active' в зависимости от того, на какой мы кликнули li. Происхолит проверка - если состояние activeItem равен индексу элемента, на который мы нажали, тогда сlassName становится 'active', а значение activeItem получает из метода onSelectItem, где при нажатии на элемент мы получаем его индекс, и соответственно меняем стэйт
                    onClick={() => onSelectItem(obj)} //вызываем функцию, которая получает индекс элемента и передаёт его в onSelectItem
                    key={`${obj.type}_${index}`}>
                    {obj.name}
                  </li>))    
                }                 
              </ul>
            </div>)}
          </div>
  )
});

SortPopup.propTypes = {
  // при помощи PropTypes мы осуществляем проверку переменных на их тип, чтобы при указании неверного типа переменной нам написало об этом в ошибке. Указание типизации
  activeSortType: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickSortType: PropTypes.func.isRequired
};

SortPopup.defaultProps = {items: [],

};

export default SortPopup;
