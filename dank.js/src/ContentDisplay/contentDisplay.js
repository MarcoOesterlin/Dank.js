import React from 'react';


class contentDisplay extends React.Component {
   
   
    render() {
      const { data } = this.props;
      console.log('data', data);
      
      return (
        
        

        <div className="contentDisplay" id="paralax2">
          { data.map(({ word, definition, gif }, i) => (
            <div className="imageContainer" key={ i }>
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


  