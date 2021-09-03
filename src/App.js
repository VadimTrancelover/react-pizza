import React, {useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPizzas } from './redux/actions/pizzas' ;
import { Route } from "react-router-dom";
import {Header} from './components';
import {Home, Cart} from "./pages/index";



function App() {

  const dispatch = useDispatch();
 

  useEffect(() => {
    fetch('http://localhost:3004/pizzas')
    .then((res) => res.json())
    .then((json) => {
      dispatch(setPizzas(json))
    });
  },[]);

  return(
    <div className="wrapper">
        <Header />
        <div className="content">  
          <Route path='/' component={Home} exact/> 
          <Route path='/cart' component={Cart} exact/> 
        </div>
      </div>
  )
} 
// // для того, чтобы в роуте прокинуть пропсы в нужный нам компонент, нужно писать вместо component -> render={() => <Home/>}
//   return 


// const mapStateToProps = (state) => { 
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   }
// }

// const mapDispatchToProps = {
//   setPizzas,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;