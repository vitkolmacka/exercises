import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';

// Action creator
function incrementCounter(num) {
  return { type: 'INCREMENT', num: num }
}

const initialState = {
  count: 0
};
// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + action.num };
    default:
      return state;
  }
}

//Inside our component we just access the store properties using props:
function Counter(props) {
  var inputNum = document.getElementById("inputNum");
  function handleClick() {
    props.incrementCounter(inputNum);
  }
    return <div>
    <p>{props.count}</p>
    <button onClick={handleClick}>Increment</button>
    <button onClick={handleClick}>Decrement</button>
    <br />
    <input type="number" id="inputNum"/>
    </div>;
}
/*Notice, that we pass 1 as the argument to our incrementCounter(), making our counter increment by 1. We can change the value to any other number, and our counter will behave as expected, because we handled the increment parameter in our reducer.*/

/*mapStateToProps - This function is called every time the store state changes. It receives the state as a parameter and returns the state for the component.*/
function mapStateToProps(state) {
  return {
    count: state.count
  };
}
/*Now, our component can access the count variable using its props! Just as the name of the function states, it maps the state to the props.*/

/*This parameter is used to map the dispatch functions to props. It can be a simple object, defining the function that needs to be mapped:*/
const mapDispatchToProps = {
  incrementCounter
}

const store = createStore(reducer);
/*In order to connect our component to the store, we need to call the connect() function, which takes two optional parameters.
The connect() function returns a new component, that wraps the component you passed to it and connects it to the store using its special parameter functions.*/


//Now, the only thing left is to call the connect() function for our Counter component and render it on the page:
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
//Remember, connect() returns a new component, which wraps the component it received.
/*mapStateToProps simply returns the state variables as props to our component, while mapDispatchToProps allows to define how we dispatch actions and make the dispatching functions available as props.*/
/*Both are optional, as, for example, your component might only need to read from the store.
mapDispatchToProps can also be defined as a function. Take a look at the official documentation for more details.
Note, that we need to import the connect function: import { connect } from 'react-redux';*/

const el = <Provider store={store}>
          <ConnectedCounter/>
        </Provider>; 

ReactDOM.render(
  el, 
  document.getElementById('root')
);


/*In our Counter example, we wrote the whole code in a single source file.
Usually, web apps contain multiple component, reducers and actions.

To make our project more manageable, we can use separate source files (and folders) for components, reducers and actions.
For example, we can move our Counter component and the action creator function to a separate Counter.js file.

In order to use the Counter component in our index.js, we need to export it first:
export default connect(mapStateToProps, mapDispatchToProps)(Counter); 

Notice, we export the connected component.

Now, we can import the component in index.js:
import Counter from './Counter'; */