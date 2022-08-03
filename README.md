# Starting up the Project

- use npx create-react-app to create a new react app
- clean the app.js, app.css and logo.png files
- install react-router-dom, react-bootstrap
- integrate font awesome CDN in index.html

# React-Bootstrap

react-bootstrap is a library that provides a lot of components for React. It is for rapid development of responsive, mobile-friendly web pages.

# React-Router-Dom

react-router-dom is a library that allows you to use react-router in your react app. It is for creating multi-page applications.

# React-toastify

react-toastify is a library that allows you to use toast notifications in your react app. It is for pop up notifications.

# use-Ref

useRef is a hook that lets you access the DOM node of a component. It helps in accessing data of a component.

# onControlled input field

onControlled is a hook that lets you control the value of an input field.

- const { confirmPassword, ...userData } = user;

* destructure the user object and assign it to userData
* assign the confirmPassword to confirmPassword

# Flux

- Flux is a software architecture that uses a central store to handle the application state.
- Flux is a pattern for handling application state and utilizes the unidirectional data flow pattern.

* Action

- An action creaters are helper functions that dispatch an action, collected into a library, that create an action from method calls/parameters., assign it to type and provide it to the dispatcher.
- An action in Flux is an object that describes the change in the application state.
- An action is dispatched by the store.
- An action is stored in the store.
- An action is handled by the dispatcher.
- e.g., { type: 'INCREMENT_COUNTER', payload: 1 }

* Dispatcher

- The dispatcher is the component that dispatches actions.
- The dispatcher is responsible for calling the store.
- e.g, <Dispatcher />

* Store

- The store is the component that stores the application state.
- The store is responsible for updating the application state.
- The store is responsible for calling the dispatcher.

* View

- The view is the component that renders the application state.
- The view is responsible for calling the store.

# Redux

- Redux is a library that provides a predictable state container for JavaScript apps.
- Redux uses Flux architecture/unidirectional flow of data to handle application state.

* Why Redux?

- Redux is a predictable state container for JavaScript apps.
- Centralized state management, easy to use, easy to reason about, and easy to test.
- Debugging and error handling.
- Flexible data flow.

* Redux addOns on React

- react-redux is a library that provides a way to use Redux in React.
- react-router-redux is a library that provides a way to use React Router in Redux.

# How Redux works?

- create a global store
- store pass through the entry file of React app
- state available to individual component without passing it as props or props drilling down to the component

* Reducer

- A reducer is a function that returns the next state of the application.
- A reducer is a pure function that takes the previous state and an action and returns the next state.
- A reducer is a pure function that needs to be triggered by an action,

# Redux Life Cycle

- Redux Action Creators -> Action -> Dispatcher -> Reducer -> State (Store -> View)

* Mutation

- A mutation is a change to the state of the application.
- A mutation is a function that makes a change to the state by copying the current state and modifying it, and then returning the new state.

# How to implement Redux and Redux Toolkit?

- install redux and redux-toolkit, react-redux and react-router-redux
- create a store and setup with app
- create slice reducer and connect it to the store
- create action and action creators
- connect slice reducer to the action
- connect action creators to the components

symbol === means that the symbol is unique and immutable.

- no multiple slice reducers or action creators in the same file to avoid duplicate state
- writing clean code

- userSlice to handle the state of the user or new state of the user
- axios is a library that makes HTTP requests.
- first call the axios and get the data from the server
- then call the action creator to set the data to the state
- dispatch the action to the store

# Use of useEffect

- if i need to add additional code after component renders, use useEffect hook
- empty array in useEffect means that the effect will only run once, when the component is mounted
- if object is passed in useEffect, it will run every time the object changes

# Steps for user-Redux

- create a slice reducer for the user
- create a action creator for the user
- connect the slice reducer to the action creator
- connect the action creator to the components
- create a component for the user
- create a component for the user list
