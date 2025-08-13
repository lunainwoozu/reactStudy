import { Fragment } from 'react';
import Header from './components/Header';
import './components/Header.css'
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/ExampleS';

function App() {

  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
