import React from 'react';
import axios from 'axios';
import ContentDisplay from '../ContentDisplay/contentDisplay';

const apiKey = "fv255taVfA5hQO3U4b9wf5Fv2cvsmT3a";


class contentGenerator extends React.Component {
    state = {
        value: '',
        result: "",
        imgUrl: "",
        lsResults: [],
        displayResult: "hide"
    };




    handleChange = (event) => {
      this.setState({value: event.target.value});
    }

    handleSubmit = async (event) => {

    event.preventDefault();

      try {
          const urbanResponse = await axios.get(`http://api.urbandictionary.com/v0/define?term=${this.state.value}`);
          const data = urbanResponse.data;
          console.log(data.list[0].definition);

          const giphyResponse = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.value}&api_key=${apiKey}&limit=5`)
          const giphyData = giphyResponse.data
          console.log(data.length === undefined)
          console.log(giphyData.data.length === 0)

          if (data.length === undefined && giphyData.data.length === 0){
            console.log("not found")
            this.setState({
              result: "Not Found",
              imgUrl: "https://media.giphy.com/media/yhsRFJI75Mcqk/giphy.gif",
              displayResult: "show"
            })

          } else {
            this.setState({
              result: data.list[0].definition,
              imgUrl: giphyData.data[0].images.original.url,
              displayResult: "show"
            });
          }





      } catch (e) {
          console.log(e);
      }

    }

    componentDidMount() {
      const lsResults = JSON.parse(localStorage.getItem('wordObject'));
      if(lsResults){
        this.setState({ lsResults });
      }


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



    render(data) {
      return (
        <React.Fragment>
          <div className="paralax" id="paralax-1">
            <form  onSubmit={this.handleSubmit}>
                <input type="text" className="searchBar" value={this.state.value} onChange={this.handleChange} />
              <input className="btn" type="submit" id="search-btn" value="Search" />
            </form>

            <div id="content">
              <h2>Searched Word: {this.state.value} </h2>
              <p>Definition: {this.state.result} </p>
              <img src={this.state.imgUrl} alt="GIF"></img>
              <button onClick={(e) => this.handleClick(e)}> Save Word </button>
            </div>
          </div>

          <div className="paralax" id="paralax-2">
            <ContentDisplay data={ this.state.lsResults } />
          </div>
        </React.Fragment>
      )
    }
  }

  export default contentGenerator
