import Container from './Container';
import React, { Component } from 'react';
import Data from '../mock/countryRegionMock'
import '../App.css'

class SelectorApp extends Component {
  render() {
    return (
      <div className="App">
        <h1>{this.props.heading}</h1>
        <h4>Selector App</h4>
        <Container Content={this.props.Content} />
      </div>
    
    );
  }
}
SelectorApp.defaultProps = { Content: Data }
export default SelectorApp;