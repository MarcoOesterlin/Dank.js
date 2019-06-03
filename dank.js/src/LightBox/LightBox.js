import React from 'react';

class LightBox extends React.Component {
    state = {
        key: this.props.key,
        image: this.getGifSrc,
        word: "",
        definition:"",
    };

    lightBoxHide = () =>{
        this.props.lightBoxHide()
    }
    getGifSrc(){
        
        let data = JSON.parse(localStorage.getItem('wordObject'));
        alert(data[0])
        return 1
    }

    render() {
      return (
        <div id="bg-dark" className={this.props.reveal} onClick={ this.props.lightBoxHide}>
            <div id="entry-container">
                <img id="album-gif" src={this.state.image}>
                </img>
                <div id="album-content">
                    <h2 id="album-word"></h2>
                    <p id="album-definition"></p>
                </div>
            </div>
        </div>
      );
    }
}
export default LightBox


  