import React from 'react';
import auth from './services/auth'
import Login from "./components/Login"
import CadastroUsuario from './components/CadastroUsuario'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

const Auth = new auth()
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={
            props => Auth.isAuth() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )
        }
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/CadastroUsuario" component={CadastroUsuario} />
            <PrivateRoute path="/app" component={() => <h1>Logado </h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes