import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Appquestion from '../Appquestion';
import Appanswer from '../Appanswer';
import Login from './Login';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login} />   
            <Route exact path='/q' component={Appquestion} />  
            <Route exact path='/a' component={Appanswer} />
        </Switch>
    </main>
)

export default Main;