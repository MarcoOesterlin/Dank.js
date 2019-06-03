import React from 'react';

class Header extends React.Component {
  state = {
    headerClass: 'header transparent',
  }
  
  listenScrollEvent = e => {
    if (window.scrollY > window.innerHeight/3 ) {
      this.setState({headerClass: 'header colored'})
    } else {
      this.setState({headerClass: 'header transparent'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <header className={this.state.headerClass}>
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


  