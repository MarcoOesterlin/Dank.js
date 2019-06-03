import React from 'react';

class LightBox extends React.Component {

    lightBoxHide = () =>{
        this.props.lightBoxHide()
    }

    render() {
      return (
        <div id="bg-dark" className={this.props.reveal} onClick={ this.props.lightBoxHide}>
            <button id="lightbox-close" onClick={this.lightBoxHide}>X</button>
            <div id="entry-container">
                <img id="album-gif" src={this.props.image} alt="Saved Gif">
                </img>
                <div id="album-content">
                    <h2 id="album-word"> {this.props.word}</h2>
                    <p id="album-definition">{this.props.definition}</p>
                </div>
            </div>
        </div>
      );
    }
}
export default LightBox


  