import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './header.scss';


const HeaderAddIcon = () => (
  <div className="header-top__icon">
    <i className="fas fa-plus"></i>
  </div>
);

const HeaderCalendarIcon = () => (
  <div className="header-top__icon">
    <i className="far fa-calendar-alt"></i>
  </div>
);

const HeaderSingOutIcon = () => (
  <div className="header-top__icon">
    <i className="fas fa-sign-out-alt"></i>
  </div>
);

const HeaderTop = () => (
  <div className="header-top d-flex align-items-center justify-content-between">
    <div className="header-top__logo-box">
      <i className="header-top__logo-icon fas fa-dumbbell"></i>
      <span className="header-top__logo-title">Gymlog</span>
    </div>
    <Router>
      <div className="header-top__icons-box d-flex">
        <Route exact path="/" component={ HeaderAddIcon } />
        <Route exact path="/" component={ HeaderCalendarIcon } />
        <Route exact path="/" component={ HeaderSingOutIcon } />
      </div>
    </Router>
  </div>
);

const HeaderBottom = () => (
  <div className="header-bottom d-flex align-items-center justify-content-center">
    <span className="header-bottom__title">Add new exercise</span>
  </div>
);

const Header = () => (
  <div>
    <HeaderTop />
    <HeaderBottom />
  </div>
);

export { Header };

