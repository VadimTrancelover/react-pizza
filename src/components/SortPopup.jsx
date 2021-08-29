import React,{useState, useEffect, useRef} from 'react'


function SortPopup({items}) {

    const [visiblePopup, setVisiblePopup] = useState(null);
    const [activeItem, setActiveItem] = useState(0);
    const activelabel = items[activeItem]; //назаначется активный элемент из массива под индексом activeItem


    const onSelectItem = (index) => {
      setActiveItem(index)
      setVisiblePopup(false)
    }

    const sortRef = useRef(); // этот хук нужен для того, чтобы хранить всегда актуальные значения

    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

    const handleOutsideClicked = (e) => { // 
      if(!e.path.includes(sortRef.current)) {
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
                    items.map((item, index) => (
                    <li
                      className = {activeItem === index ? 'active' : ''}// тут передаётся в класс li 'active' в зависимости от того, на какой мы кликнули li. Происхолит проверка - если состояние activeItem равен индексу элемента, на который мы нажали, тогда сlassName становится 'active', а значение activeItem получает из метода onSelectItem, где при нажатии на элемент мы получаем его индекс, и соответственно меняем стэйт
                      onClick={() => onSelectItem(index)} //вызываем функцию, которая получает индекс элемента и передаёт его в onSelectItem
                      key={`${item}_${index}`}>
                      {item}
                    </li>))    
                  }                 
                </ul>
              </div>)}
            </div>
    )
}

export default SortPopup;
