import React from 'react';


class contentDisplay extends React.Component {
  state = {
    savedList: []
};

  componentDidMount(){
    let savedWord = JSON.parse(localStorage.getItem("wordObject"));
    console.log(savedWord);
    
    this.setState({
      savedList:savedWord
    })
   };
   
   
    render() {
      console.log(this.state.savedList)
      return (
        
        

        <div className="contentDisplay">
        
        </div>


       
      );
    }
  }

  export default contentDisplay


  