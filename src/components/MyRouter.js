import React from 'react';
import Success from '../components/Success';

import Login from '../components/UserLogin';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link
} from 'react-router-dom';

import Passport from '../core/Passport';
const passport = new Passport()

export default class MyRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul className="nav">
                        <li><Link to="/success">成功</Link></li>
                        <li><Link to="/login">用户登录</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/success" render={(props) => {
                        // console.log(passport.isLogin)
                        // console.log(props)
                        if (passport.isLogin){
                            return <Success {...props} />
                        } else {
                            return <Redirect to="/login" />
                        }
                    }} />

                    <Route path="/login" render={(props) => {
                        return <Login {...props} passport={passport} />
                    }} />
                </div>
            </Router>
        )
    }
}