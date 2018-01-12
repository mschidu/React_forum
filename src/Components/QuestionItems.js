import React, { Component } from 'react';

export default class QuestionItems extends Component{
    render(){
        return(
            <div>
         <div className="panel panel-default">
         <div className="panel-heading">
         <li><b>{this.props.question.title}</b>:[{this.props.question.category}]</li>
         </div>
         </div>
        </div>
        );
    }
}