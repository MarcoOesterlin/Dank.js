import React from 'react';


class contentDisplay extends React.Component {
    
   componentDidMount(){
    let savedWord = JSON.parse(localStorage.getItem("wordObject"));
    console.log(savedWord);
    
   };

    render() {
      return (
        
        

        <div className="contentDisplay">
        
        </div>


       
      );
    }
  }

  export default contentDisplay