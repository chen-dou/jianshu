import React, { Component } from 'react';
import Header from './common/header'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter,Route} from 'react-router-dom'
import Detail from './pages/detail'
import Index from './pages/index'
import Login from './pages/login'
import Write from './pages/write'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" exact component={Index}></Route>
            <Route path="/detail/:id" exact component={Detail}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/write" exact component={Write}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
