import React from 'react';

import Passport from '../core/Passport.js'
import Success from '../components/Success';
// import MyRouter from '../components/MyRouter'

export default class UserLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    
    setUserInfo(event, key) {
        let obj = {};
        obj[key] = event.target.value;
        this.setState(obj);
    }

    // handleLogin(e) {
    //     let p = e.passport == null ? new Passport() : e.passport;
    //     p.login(this.state.username, this.state.password, () => {
    //         e.history.push('/success');
    //     })
    // }

     handleLogin(username,password) {
        //  console.log(username,password)
        const p = new Passport();
        p.login(username,password)
        // console.log(p.isLogin)
        console.log(this.props)
        if(p.isLogin){
            // <Success />
            this.props.history.push(<Success />);
        } else {
            <UserLogin />
        }
    }

    render() {
        return (
            <div>
                <h3>用户登录</h3>
                <div>
                    <span>用户名：</span>
                    <span><input type="text" onInput={(event) => {
                        this.setUserInfo(event, 'username');
                    }} /></span>
                </div>
                <div>
                    <span>密码：</span>
                    <span><input type="password" onInput={(event) => {
                        this.setUserInfo(event,'password');
                    }} /></span>
                </div>
                <div>
                    <button onClick={() => {this.handleLogin(this.state.username,this.state.password)}}>登录</button>
                </div>
            </div>
        )
    }

}