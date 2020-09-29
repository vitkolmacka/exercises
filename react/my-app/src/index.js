import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// code calls the render method and passes it two arguments, JSX element (<h1></h1) and a container (document.getElementById(root)). The render method displays the provided element in the container (with id root) 


//const name =["David", "Rebecca", "John"];
/*
let count = 0 ;
function show() {
  count++;
  const el=<p>{count}</p>;
  ReactDOM.render(
    el,
    document.getElementById('root')
  );
}*/
  
//setInterval(show,1000);

/*class Hello extends React.Component {
  render() {
    return <h1>Hello World</h1>;
  }
}*/
// the class and the function are the same
/*function Hello() {
  return <h1>Hello World</h1>;
}*/
/*function Hello(props) {
  return <p>Hello, {props.name}</p>;
}*/

/*class Hello extends React.Component {
  state = {
    name: "James", 
    age: 25
  }

  render() {
    return <h1>Hello, {this.state.name} {this.state.age}</h1>;
  }
}*/
/*
const el = <Hello name="David"/>;
ReactDOM.render(
  el,
  document.getElementById('root')
);
*/
// in the example above, we create a name state variable and a setName function. The square brackets syntax is called array destructuring. It assigns the name variable to the current state value, and setName to the function that allows to change the state. You can name these variables anything you like. Then, we pass "David" as the initial value for out name variable to useState()
/*
function App() {
  return <div>
    <Item name="Cheese" price="4.99" />
    <Item name="Bread" price="2.5" />
    <Item name="Ice Cream" price="24" />
  </div>
}

function Item(props) {
  return <div className="item">
    <b>Name:</b> {props.name} <br />
    <b>Price:</b> {props.price}
  </div>;
}
*/


/*class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}*/



// Counter app using class component (state)
/*
class Counter extends React.Component {
  state = {
    counter: 0
  }

  increment = () => {
    this.setState({
      counter: this.state.counter+1
    });
  }

  decrement = () => {
    this.setState({
      counter: this.state.counter-1
    });
  }

  componentDidMount() {
    this.setState({counter: 42});
  }
  //componentDidMount is called when a component is rendered on the page
  //it will set an initial value of the counter when the component is rendered
  //typically used for populating the state inside of a component when it initially mounts to the DOM

  componentDidUpdate() {
    alert("Number of clicks: " + this.state.counter);
  }
  //componentDidUpdate is called when a component is updated in the DOM

  render() {
    return <div>
      <p>{this.state.counter}</p>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
    </div>;
  }
}*/


// Counter using functional component (useState hook) 

/*To call the method only when something changes, we can provide it a second argument:
useEffect(() => {
  //do something
}, [count]);  

Now, the useEffect() method will run only if count changes.

To mimic componentWillUnmount, useEffect may return a function that cleans up after it:
useEffect(() => {
  // do something
  
  return () => {
    // cleanup
  }; 
});

You can have multiple effects in the same component.*/ 
/*
function Counter() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  }, [counter]);

  function increment() {
    setCounter(counter+1);
  }

  return <div>
  <p>{counter}</p>
  <button onClick={increment}>Increment</button>
</div>;
}*/


/*
function Toggle() {
  const [val, setVal] = useState("ON");
  function toggle() {
    setVal((val=="ON")?"OFF":"ON");
  }
  return <button onClick={toggle}>{val}</button>;
}*/

/*
function Converter() {
  const [km, setKm] = useState(0);

  function handleChange(e) {
    setKm(e.target.value);
  }

  function convert(km) {
    return (km/1.609).toFixed(2);
  }

  return <div>
    <input type="text" value={km} 
      onChange={handleChange} />
    <p>{km} km is {convert(km)} miles</p>
  </div>;
}*/


/*
function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
    // e.preventDefault() prevents the default behavior of the form, which, by default, reloads the page when submitted. In JavaScript we would use return false; for that, but in Reeact we need to call preventDefault()
  }

  return <form onSubmit={handleSubmit}>
    <input type="number" value={num} onChange={handleChange} />
    <input type="submit" value="Add" />
    <p>Sum is {sum}</p>
    <p>{num}</p>
  </form>;
}*/

// props - short for properties, are the input data for React components
// using index as a key is not always a good idea, especially if you can add new items or delete existing ones; also react does not recommend using index as a key as it has negative impact on performance of the application
/*
const arr = ["A", "B", "C"];

function MyList(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li> 
  );
  return <ul>{listItems}</ul>
}
const el = <MyList data={arr} />;
*/


//contact form --------------------

function AddPersonForm(props) {

  const [person, setPerson] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson(''); // clear the value of the text field after adding a new person
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
    <input type="text" value={person} placeholder="Add new contact" onChange={handleChange}/>
    <input type="submit" value="Add" />
  </form>;
}

function PeopleList(props) {
  const arr = props.data;
  const listItems= arr.map((val,index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>
}


// sharing state - the ContactManager component receives the initial contacts list using props, saves it in its state. Then it passes down the contacts list to its child component.  
//Data can be passed from the parent to the child, but not from the child to the parent. React uses what is called unidirectional data flow, in other words, data only flows downward, so to speak.
function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
    if (isNaN(name)) {
      alert("You cannot put numbers in there");

    }
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson}/>
      <PeopleList data={contacts} />
    </div>
  );
}

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

ReactDOM.render(
  <ContactManager data={contacts} />,
  document.getElementById('root')
);

//INTRO TO REDUX
//core concepts of Redux
//In Redux, the application's state is stored as a simple object, called store.
//There should only be a single store in an app.
{
  contacts: [{
    name: 'David'
  }, {
    name: 'Amy'
  }],
  toggle: true
}
//You cannot change the state directly. Instead, you need to dispatch an action.
/*Actions & Reducers

An action is just a plain JavaScript object:*/
{ 
  type: 'ADD_CONTACT', 
  name: 'James' 
}
/*
The code above defines an action with type ADD_CONTACT and a name property.

An action clearly describes why the state change happened, and can be dispatched from anywhere in your app.

At this point we just have a store, which includes our state data and an object, that includes some data that needs to be changed in the state. So, how do we actually do the change?
To tie the store and the action together, we need to write a function, called a reducer.
It takes state and action as arguments, and returns the next state of the app.

For example:*/
function contactsApp(state, action) {
  if (action.type === 'ADD_CONTACT') {
    return [ ...state,  action.name ]
  } else {
    return state
  }
}

/*The code above defines a simple reducer function, that checks the action and returns the new state.

These concepts are basically the idea of Redux: you hold the global state in a store, define actions to describe what to change in the store and write reducer functions to handle those actions.
Notice, we have not touched any React specific syntax, all of the above is plain JavaScript.*/

//ACTIONS
/*Action can be viewed as payloads of information that send data to the store.
Actions are represented by simple JavaScript object and need to have a type property:*/
{
  type: 'ADD_CONTACT',
  name: 'James'
}
/*
In the example above, we define an action with the type ADD_CONTACT and provide it a name property as its payload.
Notice that for the type we're using all uppercase letters and words separated by underscores. This is also called "snake case". This is the generally accepted way to create an action type.

You can use any naming and structure for the other properties defining the data in the action.

You can, for instance, call it payload, and provide it an object with the data:*/
{
    type: 'ADD_CONTACT',
    payload: {
        name: "Jimmy Barnes"
    }
 }
/*
You should pass as little data in each action as possible. That keeps the actions clean and easy to read.*/

/*Action Creators

In order to use the same action with different payloads, as well as create reusable code, we can create Action creators.

Action creators are simple functions that return actions.

For example:*/
function addContact(person) {
  return {
    type: 'ADD_CONTACT',
    payload: person
  }
}
/*
The action creator function takes a person parameter and uses that as the actions payload.
Now, we can use the action creator to create multiple new contacts by passing it the corresponding data.
Action creators are not built into the Redux library by default. It is a pattern that was implemented to create code that reflects a more DRY (Don't Repeat Yourself) approach.*/

/*Reducer Function

Reducers are functions that handle the actions.
The function takes the current state and the action as its parameters and returns the new state.

A reducer can handle multiple actions, so usually it includes a switch statement for each action case.

For example:*/
function contactsApp(state, action) {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [ ...state,  action.person ]
    default:
      return state
  }
}
/*
In the code above, our reducer function uses a switch statement to handle the appropriate actions.
As the default case, it just returns the current state.

Remember, the reducer has to be a pure function, meaning it cannot modify the current state. It has to return a new state object instead.
The default case is added for handling unknown actions.*/

/*Multiple Reducers

If you have more than one entity (i.e. users, products, invoices, orders, etc.), it's typically a good idea to break them into multiple reducer functions to separate concerns.

Redux gives us a method that we can use called combineReducers. This allows us to use more than one reducer so that when an action gets dispatched, the action would get run through all of the reducers instead of only one. It also allows us to separate the concerns of our store state.

For example:*/
const contactsApp = combineReducers({
  addContacts,
  doSomething
})
/*
Now, our contactsApp is combining two reducers into one.
It's a good practice to provide each reducer only the part of the state that it needs to manage. This is called reducer composition, and is a fundamental pattern of building Redux apps.*/

