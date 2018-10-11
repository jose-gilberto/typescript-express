import React from 'react';

import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

/**
 * @function isAuthenticated função para checar a autenticação do usuário
 */
const isAuthenticated = () => {
    return false;
};

const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={ props => (
        isAuthenticated() ? 
        (<Component {...props} />):
        (<Redirect to={{ pathname: '/',
            state: { from: props.location }
        }}/>)
    )} />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ 
                () => <h1>Home Page</h1> }/>
            <PrivateRoute path='/app' component = {
                () => <h1>is Logged</h1> }/>
        </Switch>
    </BrowserRouter>
);

export default Routes;