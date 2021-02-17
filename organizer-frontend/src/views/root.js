import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './main/main';
import Notes from './notes/notes';
import Tasks from './tasks/tasks';
import Create from './create/create';
import Register from './register/register';
import {Provider} from 'react-redux';
import store from '../store/store';
const Root = ()=>{
    return(
<Provider store={store}>
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/notes" component={Notes}/>
        <Route exact path="/tasks" component={Tasks}/>
        <Route path="/notes/create" component={Create}/>
        <Route path="/tasks/create" component={Create}/>
    </Switch>
</BrowserRouter>
</Provider>

    )
}
export default Root;