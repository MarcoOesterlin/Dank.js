import React from 'react';


class Header extends React.Component {
   
   
    render() {
      return (
        <header className="header">
          <h1>DankJS</h1>
            <a href="#search">Search</a>
            <a href="#my-gallery">My gallery</a>
        </header>
      );
    }
  }
  

  export default Header


  