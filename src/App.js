
import React, { useState } from 'react';

import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import './App.css';

const App = (props) => {

  return (
    <div id="wrapper">
      <Component1 text="Component1" />
      <Component2 text="Component2" />
      <Component3 text="Component3" />
    </div>
  );
}

export default App;
