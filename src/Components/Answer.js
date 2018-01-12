import React, { Component } from 'react';
import AnswerItems from './AnswerItems';


export default class Answer extends Component {
    render(){
        let answers;
        answers = this.props.details.map(answer => {
            return(<AnswerItems key={answer.age} answer={answer} />)
        })
        return(
            <div>
                {answers}
                
            </div>
        );
    }
}
