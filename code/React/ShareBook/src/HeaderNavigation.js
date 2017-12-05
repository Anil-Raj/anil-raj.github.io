import React, { Component } from 'react';
import { Link } from 'react-router'
import './App.css';

class Nav extends Component {
  render() {
    return (
      <div>
      	 <nav className="navbar navbar-default">
  			<div className="container-fluid">
    			<div className="navbar-header">
      				<a className="navbar-brand" href="#">WebSiteName</a>
    			</div>
    			<ul className="nav navbar-nav">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/1'}>Page 1</Link></li>
      				
      				<li><a href="#">Page 2</a></li> 
      				<li><a href="#">Page 3</a></li> 
    			</ul>
		  </div>
		</nav>
	</div>
    );
  }
}

export default Nav;