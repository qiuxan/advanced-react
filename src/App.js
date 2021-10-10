import logo from './logo.svg';
import './App.css';
import Movie from './hoc/Movie';
import Counter from './hooks/Counter';
import { Fragment } from 'react';

function App() {
  return (

    <Fragment>
      <Movie id={1} />
      <Counter />

    </Fragment>
  );
}

export default App;
