import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.css'


class Login extends Component{
    handleOnSubmit(e){
        if(this.refs.nickname.value  === ''){
            alert('Enter NickName');
        }
        else if(this.refs.password.value === ''){
            alert('password required');
        }
        else { this.props.history.push('/q');
        e.preventDefault();
    }
}


    render(){
        return(
            <div className="wrapper">
                <form onSubmit={this.handleOnSubmit.bind(this)} className="form-signin">
                <h3 class="form-signin-heading">Welcome Back to React Forum! Please Sign In</h3>
			    <hr class="colorgraph"></hr> <br />
                <input type="text" ref="nickname" placeholder="NickName" className="form-control" />
                <input type="text" ref="password" placeholder="Password" className="form-control" /><br />
                <input type="submit" value="Sign In" className="btn btn-lg btn-primary btn-block"/><br/>
                </form>
            </div>
        )
    }
}

export default withRouter(Login); 