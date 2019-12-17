import React, { Component } from 'react';
// Stateless Functional Component
// Object Destructuring
const Navbar = ({ totalCounters }) =>{
    console.log('Navbar-Rendered');
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
     <span className="badge badge-pill badge-secondary">{totalCounters}</span>
        </nav> 
     );
}


 
export default Navbar;