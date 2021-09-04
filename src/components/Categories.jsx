import React, {useState} from 'react'


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


const Categories = React.memo(function Categories({items, onClickItem}) {

  const [activeItem, setActiveItem] = useState(null);
  

  const onSelectItem = (index) => { //функция для получения index-a, и передачи значения в activeItem
    setActiveItem(index);
    onClickItem(index);
  };

  return (
      <div>
          <div className="categories">
            <ul>
              <li className = {activeItem === null ? 'active' : ''} // проверяем на значение null index-a кнопки 'все', и назначаем ей класс active.
                  onClick={() => onSelectItem(null)}> 
                    Все
              </li>
              {
                  items && items.map((item, index) => 
                  <li
                    className = {activeItem === index ? 'active' : ''}// тут передаётся в класс li 'active' в зависимости от того, на какой мы кликнули li. Происхолит проверка - если состояние activeItem равен индексу элемента, на который мы нажали, тогда сlassName становится 'active', а значение activeItem получает из метода onSelectItem, где при нажатии на элемент мы получаем его индекс, и соответственно меняем стэйт
                    onClick={() => onSelectItem(index)} //вызываем функцию, которая получает индекс элемента и передаёт его в onSelectItem
                    key={`${item}_${index}`}>
                    {item}
                  </li>)    
              }
            </ul>
          </div>
      </div>
  )
})

export default Categories

