export default class Passport {
    constructor() {
        this.isLogin = false;
    }

    login(username, password,) {
        console.log(username,password)
        if(username === 'timo' && password === '123') {
            this.isLogin = true;
            // callback();
        } else {
            console.log('登录失败！');
        }
    }
} 