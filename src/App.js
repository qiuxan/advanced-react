// import logo from './logo.svg';
import './App.css';
import Movie from './hoc/Movie';
import Counter from './hooks/Counter';
import { Fragment } from 'react';
import Users from './hooks/Users';

function App() {
  return (

    <Fragment>
      <Movie id={1} />
      <Counter />
      <Users />

    </Fragment>
  );
}

export default App;
