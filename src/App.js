import React, { Component } from 'react';
import './App.scss';
import {Route, Switch} from 'react-router-dom';
import Main from './pages/main';
import Cart from './pages/cart';
//import {Products} from "./components/containers";

class App extends Component {
  render() {
    return (
        <div className={'App'}>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/cart" component={Cart} />
            </Switch>
        </div>
    );
  }
}

export default App;