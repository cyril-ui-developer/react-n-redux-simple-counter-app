import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  count: 0
}

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      }
    case "DECREMENT":
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}
const store = createStore(reducer);
//store.dispatch({type: 'INCREMENT'})

class App extends Component {
  render() {
    return (
      <section className="container">
        <h2>React-n-Redux Counter App</h2>
        <Provider store={store}>
          <Counter />
        </Provider>
      </section>
    );
  }
}

export default App;
