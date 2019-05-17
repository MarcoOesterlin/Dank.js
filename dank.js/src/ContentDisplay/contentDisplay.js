import React from 'react';


class contentDisplay extends React.Component {
  state = {
    savedList: []
};

  componentDidMount(){
    // let savedWord = JSON.parse(localStorage.getItem("wordObject"));
    // console.log(savedWord);
    
    // this.setState({
    //   savedList:savedWord
    // })
   };
   
   
    render() {
      const ls = JSON.parse(localStorage.getItem('wordObject'));
      console.log(ls)
      return (
        
        

        <div className="contentDisplay">
          { ls.map(({ word, definition, gif }, i) => (
            <div key={ i }>
              <h2>{ word }</h2>
              <p>{ definition }</p>
              <img src={gif} alt="gif"/>
            </div>
          )) }
        </div>


       
      );
    }
  }
  

  export default contentDisplay


  