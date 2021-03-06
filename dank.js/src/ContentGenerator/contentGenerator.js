import React from 'react';
import axios from 'axios';
import ContentDisplay from '../ContentDisplay/contentDisplay';
import Header from '../Header/Header';
import LightBox from '../LightBox/LightBox';

const apiKey = "fv255taVfA5hQO3U4b9wf5Fv2cvsmT3a";

class contentGenerator extends React.Component {
  
  state = {
    value: '',
    result: "",
    imgUrl: "",
    lsResults: [],
    displayResult: "hide",
    LightBoxStatus: "hide",
    LightBoxKey: "",
    LightBoxImage: "",
    LightBoxword: "",
    LightBoxDefinition: "",
  };
  revealAlbumContent = (e, i) => {
    let data = this.state.lsResults
    let word = data[i]['word']
    let image = data[i]['gif']
    let definition = data[i]['definition'];
    this.setState(
    {
        LightBoxStatus: 'show',
        LightBoxWord: word, 
        LightBoxImage: image,
        LightBoxDefinition: definition,
        LightBoxKey: i,
    })  
  }
  lightBoxHide = () => {
    this.setState({LightBoxStatus: 'hide' })
  }
  getStorage = () => {
    const lsResults = JSON.parse(localStorage.getItem('wordObject'));
      if(lsResults){
        this.setState({ lsResults });
      }
    }
  handleChange = (event) => {
    this.setState({value: event.target.value});
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const urbanResponse = await axios.get(`http://api.urbandictionary.com/v0/define?term=${this.state.value}`);
      const data = urbanResponse.data;

      const giphyResponse = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.value}&api_key=${apiKey}&limit=5`)
      const giphyData = giphyResponse.data

      if (data.length === undefined && giphyData.data.length === 0){
        this.setState({
          result: "Not Found",
          imgUrl: "https://media.giphy.com/media/yhsRFJI75Mcqk/giphy.gif",
          displayResult: "show"
        })
      }
      else {
        let wordResult = ""
        if(data.list.length === 0){
          wordResult = "Not found"
        }
        else{
          wordResult = data.list[0].definition;
        }
        this.setState({
        result: wordResult,
        imgUrl: giphyData.data[0].images.original.url,
        displayResult: "show"
        });
      }
    }
    catch (e) {
      console.log(e);
    }
  }
  componentDidMount() {
    this.getStorage()
  }
  handleClick(){
    let savedWord = JSON.parse(localStorage.getItem("wordObject"));
    let word = this.state.value;
    let definition = this.state.result
    let gif = this.state.imgUrl

    let wordObject = {
      word: word,
      definition: definition,
      gif: gif
    }

    if(savedWord == null){
      savedWord = []
    }

    savedWord.push(wordObject);
    let JsonWord = JSON.stringify(savedWord);
    localStorage.setItem("wordObject", JsonWord)
    this.setState({
      lsResults: savedWord,
    });
  }
  galleryMove = (e) => {
    let index = e.target.getAttribute('data-key')
    this.revealAlbumContent(e, index)
    e.stopPropagation()
  }

  render(data) {
    return (
      <React.Fragment>
        
        <LightBox galleryMove={this.galleryMove} maxLength={this.state.lsResults.length} definition={this.state.LightBoxDefinition} word={this.state.LightBoxWord} image={this.state.LightBoxImage}  entryKey={this.state.LightBoxKey} reveal={this.state.LightBoxStatus} lightBoxHide={this.lightBoxHide} />
        
        <div className="paralax" id="paralax-1">
          <Header></Header>
          <div id="result-container">
            <div id="result-wrapper" className={this.state.displayResult}>
              <img id="image-result" src={this.state.imgUrl} alt="GIF"></img>
              <div id="urban-result">
                <h2 id="searched-word" >Searched Word: {this.state.value} </h2>
                <p id="definition-word" >Definition: {this.state.result} </p>
                <button id="save-icon" onClick={(e) => this.handleClick(e)}> Save Word </button>

              </div>
            </div>
          </div>
          
          <form onSubmit={this.handleSubmit}>
            <input type="text" className="searchBar" value={this.state.value} onChange={this.handleChange} placeholder="Enter keyword" />
            <input className="btn" type="submit" id="search-btn" value="Search" />
          </form>

        </div>

        <div className="paralax" id="paralax-2">
          <ContentDisplay revealAlbumContent={this.revealAlbumContent} getStorage={this.getStorage} data={ this.state.lsResults } />
        </div>
      
      </React.Fragment>
    )
  }
}
export default contentGenerator
