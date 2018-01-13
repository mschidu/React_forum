import React, { Component } from 'react';
import Answer from './Components/Answer';
import AddAnswer from './Components/AddAnswer';
import './App.css';

class Appanswer extends Component {
  constructor(){
    super();
    this.state = {
        answers : []
    }
}
componentWillMount(){
    this.setState({
              answers :[ 
            {
                "nickname": "Chidu",
                "age":"40",
                "answer":"react is a JS library!"
            },
            {
                "nickname": "John",
                "age":"35",
                "answer":"react is component based!"
            },
            {
                "nickname": "Reactrookie",
                "age" :"22",
                "answer" :"react consists of state and props!"
            },

            ]
    });
}

handleAddAnswer(newanswer){
  let answers = this.state.answers;
  answers.push(newanswer);
  this.setState({answers:answers});
}

  render() {
    return (
      <div className="App">
        <h1>what is react?</h1>
        <AddAnswer AddAnswer={this.handleAddAnswer.bind(this)} /> <br />
        <Answer details = {this.state.answers} />
      </div>
    );
  }
}

export default Appanswer;
