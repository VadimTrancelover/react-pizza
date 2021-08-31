import React, {useEffect, useState} from "react";
import { Route } from "react-router-dom";
import {Header} from './components';
import {Home, Cart} from "./pages/index";


function App() {

    console.log('Whats happenes') 


  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
      fetch('http://localhost:3000/pizzas')
        .then((res) => res.json())
        .then((json) => {
          setPizzas(json);
        });
  }, []);
  
// для того, чтобы в роуте прокинуть пропсы в нужный нам компонент, нужно писать вместо component -> render={() => <Home/>}
  return (
    <div className="wrapper">
      <Header />
      <div className="content">  
        <Route path='/' render={() => <Home items={pizzas}/>} exact/> 
        <Route path='/cart' component={Cart} exact/> 
      </div>
    </div>
  );
}

export default App;
