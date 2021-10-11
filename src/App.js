import React, { Component } from 'react';
import Login from './context/Login';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';
import CartContext from './context/cartContext';

class App extends Component {

  handleLoggedIn = (username) => {
    console.log('getting the user:', username);
    const user = { name: 'qiu' };
    this.setState({ currentUser: user });
    // console.log(this.state);
  }
  state = {
    currentUser: null
  }
  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider value={{ currentUser: this.state.currentUser, onLoggedIn: this.handleLoggedIn }}>
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>

    );
  }
}
export default App;


// // import logo from './logo.svg';
// import './App.css';
// import Movie from './hoc/Movie';
// import Counter from './hooks/Counter';
// import { Fragment } from 'react';
// import Users from './hooks/Users';

// function App() {
//   return (

//     <Fragment>
//       <Movie id={1} />
//       <Counter />
//       <Users />

//     </Fragment>
//   );
// }

// export default App;
