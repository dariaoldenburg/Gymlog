import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';

import './styles/styles.scss';

// import { store } from './store';
import { Header } from './components/header';

ReactDOM.render(
  <div className="app">
    {/*<Provider store={ store }>*/}
    <Router>
      <span>
        <Header />
        {/*<Route exact path="/" component={ FilmList } />*/}
      </span>
    </Router>
    {/*</Provider>*/}
  </div>,
  document.getElementById('gymlog-root')
);

