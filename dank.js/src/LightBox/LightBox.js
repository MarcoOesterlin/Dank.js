import React from 'react';

class LightBox extends React.Component {

    lightBoxHide = () =>{
        this.props.lightBoxHide()
    }
    galleryMove = (e) =>{
        this.props.galleryMove(e);
    }

    render() {
      return (
        <div id="bg-dark" className={this.props.reveal} onClick={ this.props.lightBoxHide}>
            { this.props.entryKey > 0 && 
                <button className="album-nav" data-key={this.props.entryKey-1} onClick={(e) => this.galleryMove(e)} id="album-nav-last"></button>           
            }

            <button id="lightbox-close" onClick={this.lightBoxHide}>X</button>
            <div id="entry-container">
                <img id="album-gif" src={this.props.image} alt="Saved Gif">
                </img>
                <div id="album-content">
                    <h2 id="album-word"> {this.props.word}</h2>
                    <p id="album-definition">{this.props.definition}</p>
                </div>
            </div>
            { this.props.entryKey < this.props.maxLength-1 && 
            /* eval(to avoid concatenation) */
                <button className="album-nav" data-key={(eval(this.props.entryKey) +eval(1))} onClick={(e) => this.galleryMove(e)} id="album-nav-next"></button>           
            }
        </div>
      );
    }
}
export default LightBox


  