import React from 'react';

class Header extends React.Component {   
  render() {
    return (
      <header className="header">
        <h1>DankJS</h1>
        <nav>
          <a href="#paralax-1">Search</a>
          <a href="#paralax-2">My gallery</a>          
        </nav>

      </header>
    );
  }
}
export default Header


  