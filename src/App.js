import React from 'react';
import Main from './pages/index';
import './css/App.css';
import { Switch, Route } from 'react-router-dom';
//123
function App() {
  return (
    <Switch>
      <Route path='/' component={Main} />
    </Switch>
  );
}

export default App;
