import React, { Component } from 'react';

export default class AddAnswer extends Component {
    static defaultProps ={
        categories : ['AskReact', 'ELI5', 'AMA']}
    constructor(){
        super();
        this.state = {
            newquestion:{}
        }
    }
handleOnSubmit(e){
    if(this.refs.title.value === ''){
        alert('please enter your question');
    }
    else if(this.refs.category.value === ''){
        alert('please select any category');}
    else{
        this.setState({newquestion:{
            title:this.refs.title.value,
            category:this.refs.category.value
        }},function() {
            this.props.Addquestion(this.state.newquestion);
            
        })
    }
    e.preventDefault();
}

            
    render(){
        let categoryOptions = this.props.categories.map(category=>{
            return <option key={category} value={category}>{category}</option>
        })
        return(
            <div>
                <form onSubmit={this.handleOnSubmit.bind(this)}>
                    <h3><label className="label label-default">Title</label></h3>
                    <input type="text" ref="title" className="form-control" />
                    <h3><label className="label label-default">Category</label></h3>
                    <select className="form-control" ref="category">{categoryOptions}</select><br />
                    <button className="btn btn-primary">Post</button><br />
                </form>
            </div>
        );
    }
}
