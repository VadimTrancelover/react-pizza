import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { setPizzas } from './redux/actions/pizzas' 
import { Route } from "react-router-dom";
import {Header} from './components';
import {Home, Cart} from "./pages/index";


// function App() {

//     console.log('Whats happenes') 


//   const [pizzas, setPizzas] = useState([]);

  // useEffect(() => {
  //     fetch('http://localhost:3004/pizzas')
  //       .then((res) => res.json())
  //       .then((json) => {
  //         setPizzas(json);
  //       });
  // }, []);
  
// // для того, чтобы в роуте прокинуть пропсы в нужный нам компонент, нужно писать вместо component -> render={() => <Home/>}
//   return 
// }




class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3004/pizzas')
    .then((res) => res.json())
    .then((json) => {
      this.props.dispatch(
        setPizzas(json)
      );
    });
  }

  
  render() {

    console.log(this.props.items)
    return (
      <div className="wrapper">
        <Header />
        <div className="content">  
          <Route path='/' render={() => <Home items={this.props.items}/>} exact/> 
          <Route path='/cart' component={Cart} exact/> 
        </div>
      </div>
    );
  }

}



const mapStateToProps = (state) => { 
  console.log(state)
  return {
    items: state.pizzas.items
  }
}

export default connect(mapStateToProps)(App);