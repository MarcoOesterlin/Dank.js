import React from 'react';
import './App.css';
import ContentGenerator from './ContentGenerator/contentGenerator';
import ContentDisplay from './ContentDisplay/contentDisplay';





class App extends React.Component {
  


  render(){

  return (
    <div className="App">
      <ContentGenerator />
      <ContentDisplay />
    </div>
  );
}
}

export default App;
