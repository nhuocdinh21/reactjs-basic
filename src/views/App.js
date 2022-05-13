import logo from './logo.svg';
import './App.scss';
import Home from './Nav/Home';
import MyComponent from './Example/MyComponent.js';
import Nav from './Nav/Nav';
import ListTodo from './Todos/ListTodo';
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

/* 
* 2 Components: Class Component and Function Component (function or arrow function)
* Function Component syntax: return
* Class Component syntax: render
*/

// const App = () => {
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
