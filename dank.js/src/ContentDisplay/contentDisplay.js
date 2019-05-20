import React from 'react';


class contentDisplay extends React.Component {
   
   
    render() {
      const { data } = this.props;
      console.log('data', data);
      
      return (
        
        

        <div className="contentDisplay">
          { data.map(({ word, definition, gif }, i) => (
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


  