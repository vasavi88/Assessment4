import React, { Component } from 'react';
// import './App.css';
import Form from '../component/Form';
import MockData from '../mock/countryRegionMock';
import { BrowserRouter as Router, HashRouter,Switch, Route, Link } from 'react-router-dom';
// import CommonDropDown from './component/common/commonDropDown';
// import header from './component/header';
// import Header from '/header';
// import Data from '../mock/countryRegionMock'
// import '../styles/App.css'
// import RegionCountryList from './regionCountryList'
// import getCountries from './getCountries'



class TodoApp extends Component {
  render() {
    return (
      <div className="container">
        {/* todo app heading */}
        <h1 ><center> {this.props.Content.heading}</center></h1>          
        <div>
          <div>
            <Form />
          </div>
          </div>
          </div>
         
        
    );
    }}

TodoApp.defaultProps = { Content: MockData }
export default TodoApp