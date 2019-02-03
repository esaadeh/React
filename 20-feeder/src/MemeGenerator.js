import React, { Component } from 'react';


class MemeGenerator extends Component {
  // Creating class variables outsite of a constructor
  state = {
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
    allMemeImgs: []
  }
  // constructor() {
  //   super()
  //   this.state = {
  //     topText: "",
  //     bottomText: "",
  //     randomImg: "http://i.imgflip.com/1bij.jpg",
  //     allMemeImgs: []
  //   }
  // Binding the handleChange Method to class component MemeGenerator
  // this.handleChange = this.handleChange.bind(this);
  // this.handleSubmit = this.handleSubmit.bind(this);
  // }

  componentDidMount() {
    // CORS fix
    let corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";
    let apiUrl = "http://api.imgflip.com/get_memes";
    let fetchUrl = corsAnywhereUrl + apiUrl;

    // API Call
    fetch(fetchUrl)
      // Take that response and convert to json
      .then(response => response.json())
      // Take that response.data and save it to object {memes}
      .then(response => {
        const { memes } = response.data
        //test
        console.log("+================test============================");
        console.log(memes[0]);
        // Set that to state of allMemeImgs
        this.setState({ allMemeImgs: memes })

      })
  }
  // Using arrow functions gives it a lexical this. Uses this of surrounding environment (Class) and not just within {} of function using it.   making binding not necesary
  handleChange = (event) => {
    //test
    console.log("Working!")

    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    // Prevents the submit function/button from refreshing the form
    event.preventDefault()
    // Get random ind (index in array)
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    // Get the meme from the index
    const randMemeImg = this.state.allMemeImgs[randNum].url
    // Set randomImg to the .url of the random meme selected
    this.setState({ randomImg: randMemeImg })
  }

  render() {
    return (
      <div>
        {/* Utilizing the <button's onsubmit funtionality when contained within a form */}
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          {/* Need to set css styling for the text bellow ro render onto the meme */}
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    )
  }
}

export default MemeGenerator;


