Redux
Definition: Redux is a predictable state container for JavaScript apps, often used with React. It helps manage the state of an application in a single, immutable state object.

Key Concepts:

Actions: Plain JavaScript objects describing what happened.
Reducers: Pure functions determining how the state is updated in response to actions.
Store: Holds the application state, allows access with getState(), and lets you dispatch actions and subscribe to changes.
import { createStore } from 'redux';

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);
store.subscribe(() => console.log(store.getState()));
store.dispatch({ type: 'INCREMENT' });

Virtual DOM
Definition: The Virtual DOM is a concept implemented by libraries like React. It's a lightweight copy of the actual DOM. It allows for efficient updates and re-rendering of the UI by minimizing direct manipulations of the actual DOM, which is slow.

How it Works:

When the state of an object changes, a new Virtual DOM representation is created.
This representation is compared to the previous Virtual DOM snapshot.
The differences are computed and then efficiently updated in the real DOM.
DOM (Document Object Model)
Definition: The DOM is a programming interface provided by browsers, allowing scripts to update the content, structure, and style of a document. Essentially, it represents the page so that programs can change the document structure, style, and content.

HOC (Higher-Order Components)
Definition: A higher-order component (HOC) is an advanced technique in React for reusing component logic. It’s a function that takes a component and returns a new component.

const EnhancedComponent = higherOrderComponent(WrappedComponent);

WebSockets
Definition: WebSockets provide a full-duplex communication channel over a single, long-lived connection. They enable real-time data flow between clients and servers, making them suitable for applications that require constant data exchange, like chat applications or live sports updates.

const socket = new WebSocket('ws://example.com');

socket.onopen = function(event) {
  socket.send('Hello Server!');
};

socket.onmessage = function(event) {
  console.log('Message from server ', event.data);
};

Promises
Definition: A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code in a more manageable way.

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

myPromise.then((successMessage) => {
  console.log('Yay! ' + successMessage);
});

Async Programming with setTimeout
Definition: Asynchronous programming allows the program to move on to other tasks while waiting for asynchronous operations (like timeouts, API calls) to complete.

console.log('Start');
setTimeout(() => {
  console.log('This is async after 2 seconds');
}, 2000);
console.log('End');

In this example, the output will be "Start", "End", and, after a 2-second delay, "This is async after 2 seconds", demonstrating how the JavaScript event loop handles asynchronous callbacks.

