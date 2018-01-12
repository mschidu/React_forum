import React, { Component } from 'react';
import Question from './Components/Question';
import AddQuestion from './Components/AddQuestion';


class Appquestion extends Component {
    constructor(){
        super();
        this.state= {
            questions :[]
        }
    }
    componentWillMount(){
        this.setState({
            questions : [
                {
                    "title": "what is redux?",
                    "category" : "AskReact"
                },
                {
                    "title": "what is a state?",
                    "category" : "ELI5"
                },
                {
                    "title": "I'm a front-end dev,AMA",
                    "category" : "AMA"
                }
            ]
        })
    }
    handleAddQuestion(newquestion){
        let questions = this.state.questions;
        questions.push(newquestion);
        this.setState({questions:questions});
      }
    render(){
        return(
            <div>
                <h1>FORUM</h1>
                <h3> Ask Your Question </h3>
                <AddQuestion Addquestion={this.handleAddQuestion.bind(this)} /> <br />
                <Question details={this.state.questions} />
            </div>
        );
    }
}
export default Appquestion;