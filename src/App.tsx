import React, {useReducer} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.css';
import Main from './main/main';
import reducer from './reducer';

// const store = createStore(reducer);
function App() {
  return (
    <div className="App">
      <header className="App-header">

          <Main/>
      </header>
    </div>
  );
}



export default App;
