import React, { Component } from 'react';

export default class AddAnswer extends Component {
    constructor(){
        super();
        this.state = {
            newanswer:{}
        }
    }
handleOnSubmit(e){
    if(this.refs.age.value === ''){
        alert('please enter your age');
    }
    else if(this.refs.nickname.value === ''){
        alert('please enter any nickname');}
    else if(this.refs.answer.value === ''){
        alert('please enter your answer');
    }
    else{
        this.setState({newanswer:{
            nickname:this.refs.nickname.value,
            age:this.refs.age.value,
            answer:this.refs.answer.value
        }},function() {
            this.props.AddAnswer(this.state.newanswer);
            
        })
    }
    e.preventDefault();
}

            
    render(){
        return(
            <div>
                <h3> Add Answer </h3>
                <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <h3><label className="label label-default">NickName</label></h3>
                    <input type="text" ref="nickname" className="form-control" />
                    <h3><label className="label label-default">Age</label></h3>
                    <input type="text" ref="age" className="form-control" /><br />
                    <h3><label className="label label-default">Your Answer</label></h3>
                    <input type= "text" ref="answer" className="form-control" /><br />
                    <button className="btn btn-primary">Post</button><br />
                </form>

            </div>
        );
    }
}
