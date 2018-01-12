import React, { Component } from 'react';

export default class AnswerItems extends Component{
    render(){
        return(
        <div>
         <div className="panel panel-default">
         <div className="panel-heading">
         <b>{this.props.answer.nickname}</b> of age {this.props.answer.age}
         </div>
         <div className="panel-body">
          {this.props.answer.answer}
         </div>
         </div>
        </div>
        );
    }
}