import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Auth from '../Auth/Auth'
import ForgetPassword from '../Auth/ForgetPassword'
import Register from '../Auth/Register'
import ResetPassword from '../Auth/ResetPassword'
import AuthPage from '../pages/AuthPage'
import DashBoardPage from '../pages/DashBoardPage'
import MoviePage from '../pages/MoviePage'
import SettingPage from '../pages/SettingPage'
import UserPage from '../pages/UserPage'

const AppRoute = () => {
    return (
        <>
            <BrowserRouter>
            <Switch>
                  <Route exact path="/" component={Auth}/>
                  <Route path="/forget-pass" component={ForgetPassword}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/reset" component={ResetPassword}/>
                  <Route component={DashBoardPage} path="/dash"/>
                  <Route path="/movies" component={MoviePage}/>
                  <Route path="/users" component={UserPage} />
                  <Route path="/settings" component={SettingPage}/>
                  

            </Switch>
            </BrowserRouter>
        </>
    )
}

export default AppRoute
