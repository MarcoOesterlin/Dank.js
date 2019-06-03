import React from 'react';

class contentDisplay extends React.Component {
    
  revealAlbumContent = (e, i) => {
    this.props.revealAlbumContent(e, i);    
  }
  
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
      
    return (
      
      <div className="contentDisplay" >
        <h2 className="header-txt">Saved Gifs</h2>
        <div className="flex-container">
            
          { data.map(({ word, definition, gif }, i) => (
            <div className="imageContainer" key={ i } onClick={ (e) => this.revealAlbumContent(e, i)}>
              <button className="delete-btn" image-data={i} onClick={ (e) => this.handleDelete(e)}>X</button>
              <img className="saved-image" src={gif} alt="gif"/>
              <h2 className="image-title">{ word }</h2>
            </div>
          )) }
        </div> 
      </div>
    );
  }
}
  

  export default contentDisplay


  