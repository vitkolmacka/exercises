import React, {useState} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
//making a Counter App
//first we need to create our action and corresponding reducer

function Counter() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1);
  }
  return <div>
  <p>{counter}</p>
  <button onClick={increment}>Increment</button>
  </div>;
}

function incrementCounter(num) {
  return {
    type: 'INCREMENT',
    num: num    
  }
}
//the code above declares an actioncreator function named incrementCounter(), which returns an action with type INCREMENT and the corresponding payload
//reducer
const initialState = {
  count: 0
};

function reducer(state = initialState, action){
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + action.num };
    default:
      return state;
  }
}
//the code above defines a reducer function, which returns the new state based on the given action. We increment the count state variable by the provided num value.
//We also provide a default value for out state using initialState variable

//Creating the Store
//To create the store, we call the createStore() function, which takes the reducer as its parameter:
const store = createStore(reducer);
//Passing the store to our components is achieved using a special <Provider> element. It makes the store available to any nested child component.
const el = <Provider store={store}>
  <Counter />
</Provider>;
//Provider takes the store as an attribute and makes it available to its child component
/*We need to import { createStore } and { Provider } using the following syntax:
import { Provider } from 'react-redux';
import { createStore } from 'redux';*/

/*At this point, we have created our action, the reducer, the store, and made it available to our Counter component using the Provider element.

In order to connect our component to the store, we need to call the connect() function.
The connect() function returns a new component, that wraps the component you passed to it and connects it to the store using its special parameter functions.*/

export default App;