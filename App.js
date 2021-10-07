import React, { Component } from 'react';

import Header from './component/Header';
import MockContent from './mock/countryRegionMock'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SelectorApp from './component/SelectorApp';
import TodoApp from './component/TodoApp';

class App extends Component {
  render() {
    return (
      
      <Router>
          <Header />
          <Switch>
            <Route exact path='/SelectorApp' component={SelectorApp} />
            
            <Route exact path='/TodoApp' component={TodoApp} />
          </Switch>
        </Router>
    );
  }
}
App.defaultProps = { Content: MockContent }

export default App;