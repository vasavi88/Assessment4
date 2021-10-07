import React, { component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            // <div className="navbar navbar-default">
            //     <Link to={'/SelectorApp'} className="SelectorApp">SelectorApp
                    
            //     </Link> <Link to={'/TodoApp'} className="Todo App">TodoApp
                    
            //     </Link>
            // </div>
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#"></a>
                
              </div>
              <ul className="nav navbar-nav">
              <li ><Link to={'/SelectorApp'}>SelectorApp</Link></li>
              
              <li ><Link to={'/TodoApp'}>TodoApp</Link></li>
              

              </ul>

             
            </div>
          </nav>
              

        )
    }
}


      
export default Header