import React from 'react';

class Header extends React.Component {
  state = {
    headerClass: 'header transparent',
    navigationStyle: 'show'
  }
  
  listenScrollEvent = e => {
    if (window.scrollY > 30 ) {
      this.setState({headerClass: 'header colored'})
    } else {
      this.setState({headerClass: 'header transparent'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  toggleNavBar = () => {
    if(this.state.navigationStyle === 'hide'){
      this.setState({navigationStyle: 'show' })
    }
    else{
      this.setState({navigationStyle: 'hide'})
    }
  }
  render() {

    return (
      <header className={this.state.headerClass}>
        <h1>DankJS</h1>
        <button onClick={this.toggleNavBar} id="bigmack"></button>      
        <nav className={this.state.navigationStyle} >
          <a href="#paralax-1">Search</a>
          <a href="#paralax-2">My gallery</a>    
        </nav>

      </header>
    );
  }
}
export default Header


  