import React, { Component } from 'react';
import QuestionItems from './QuestionItems';

export default class App extends Component{
    render(){
        let questions;
        questions = this.props.details.map(question => {
            return(<QuestionItems key={question.category} question={question} />)
        })
        return(
            <div>
             {questions}
            </div>
        );
    }
}