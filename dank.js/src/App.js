import React from 'react';
import './App.css';
import ContentGenerator from './ContentGenerator/contentGenerator';
import Header from './Header/Header';





class App extends React.Component {
  
  render(){

  return (
    <div className="App">
      <Header/>
      <ContentGenerator />
    </div>
  );
}
}

export default App;
