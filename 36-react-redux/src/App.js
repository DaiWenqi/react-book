import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Header from './Header';
import Content from './Content';
import {Provider} from './react-redux';

import PropTypes from 'prop-types'

function CreateStore (reducer) {
    let state = null;
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化 state

    return { getState, dispatch, subscribe };
}

const themeReducer = (state, action) => {
    if (!state) return {
        themeColor: 'red'
    }

    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, themeColor: action.themeColor}
        default:
            return state

    }
}

const store = CreateStore(themeReducer)
// function App() {
//   return (
//     <div className="App">
//       <Header></Header>
//       <Content></Content>
//     </div>
//   );
// }
class App extends Component {
    // static childContextTypes = {
    //   store: PropTypes.object
    // }
  
    // getChildContext () {
    //   return { store }
    // }
  
    render () {
      return (
        <div>
            <Provider store={store}>
                <Header />
                <Content />
            </Provider>
        </div>
      )
    }
  }

export default App;
