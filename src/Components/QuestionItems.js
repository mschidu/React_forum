import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class QuestionItems extends Component{
    render(){
        return(
            <div>
         <div className="panel panel-default">
         <div className="panel-heading">
         <li><a><Link to='/a'><b>{this.props.question.title}</b>:[{this.props.question.category}]</Link></a></li>
         </div>
         </div>
        </div>
        );
    }
}