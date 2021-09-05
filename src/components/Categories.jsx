import React from 'react'
import PropTypes from "prop-types";



// class Categories extends Component {

//     state = {
//       activeItem: 2,
//     };

//     onSelectItem = (index) => {
//       this.setState({
//         activeItem: index,
//       })
//     };

//     render() {

//       const {items} = this.props

//       return(
//         <div>
//             <div className="categories">
//               <ul>
//                 <li className="active">Все</li>
//                 {
//                     items.map((item, index) => 
//                     <li className={this.state.activeItem === index ? 'active' : ''} // тут передаётся в класс li 'active' в зависимости от того, на какой мы кликнули li. Происхолит проверка - если состояние activeItem равен индексу элемента, на который мы нажали, тогда сlassName становится 'active', а значение activeItem получает из метода onSelectItem, где при нажатии на элемент мы получаем его индекс, и соответственно меняем стэйт
//                     onClick={() => this.onSelectItem(index)} 
//                     key={`${item}_${index}`}>{item}</li>)
                       
//                 }
//               </ul>
//             </div>
//         </div>
//       )
//     }
// }


const Categories = React.memo(function Categories({ActiveCategory, items, onClickCategory}) {

  console.log()
  

  return (
      <div>
          <div className="categories">
            <ul>
              <li className = {ActiveCategory === null ? 'active' : ''} // проверяем на значение null index-a кнопки 'все', и назначаем ей класс active.
                  onClick={() => onClickCategory(null)}> 
                    Все
              </li>
              {
                  items && items.map((item, index) => 
                  <li
                    className = {ActiveCategory === index ? 'active' : ''}// тут передаётся в класс li 'active' в зависимости от того, на какой мы кликнули li. Происхолит проверка - если состояние activeItem равен индексу элемента, на который мы нажали, тогда сlassName становится 'active', а значение activeItem получает из метода onSelectItem, где при нажатии на элемент мы получаем его индекс, и соответственно меняем стэйт
                    onClick={() => onClickCategory(index)} //вызываем функцию, которая получает индекс элемента и передаёт его в onSelectItem
                    key={`${item}_${index}`}>
                    {item}
                  </li>)    
              }
            </ul>
          </div>
      </div>
  )
})


Categories.propTypes = {
  // при помощи PropTypes мы осуществляем проверку переменных на их тип, чтобы при указании неверного типа переменной нам написало об этом в ошибке. Указание типизации
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func
};

Categories.defaultProps = {
  activeCategory: null,
  items: [], 
};


export default Categories

