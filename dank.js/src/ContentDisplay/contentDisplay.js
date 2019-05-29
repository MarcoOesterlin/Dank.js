import React from 'react';


class contentDisplay extends React.Component {

  
    getStorage = () =>{
      this.props.getStorage();
    }
    
    handleDelete(e, imageData){
      let dataKey = e.target.getAttribute('image-data')
      let data = localStorage.getItem('wordObject')
      let JsonObject = JSON.parse(data)
      JsonObject.splice(dataKey, 1)
      localStorage.setItem('wordObject', JSON.stringify(JsonObject))
      this.getStorage()
      
    }


    render() {
      const { data } = this.props;
      console.log('data', data);
      
      return (
        
        

        <div className="contentDisplay">
          <h2 className="header-txt">Saved Gifs</h2>
          <div className="flex-container">
            
            { data.map(({ word, definition, gif }, i) => (
              <div className="imageContainer" key={ i }>
                {/* <h2>{ word }</h2> */}
                {/* <p>{ definition }</p> */}
                <button className="delete-btn" image-data={i} onClick={ (e) => this.handleDelete(e)}>X</button>
                <img className="saved-image" src={gif} alt="gif"/>
              </div>
            )) }
          </div> 
        </div>
      );
    }
  }
  

  export default contentDisplay


  