
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { compTexts } from './store/actions/index';

import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import './App.css';

const App = (props) => {

  useState(() => {
    props.compTexts();
  }, []);

  return (
    <div id="wrapper">
      <Component1 />
      <Component2 />
      <Component3 />
    </div>
  );
}

export default connect(null, {compTexts})(App);
