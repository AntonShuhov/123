import {makeAutoObservable} from "mobx";

export default class Store {
    user = {
        email : '',
        password : '',

    };
    isAuth = false;

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(email, password) {
        this.user.email = email;
        this.user.password = password;
    }

    async login(email, password) {
            try {
                this.setUser(email, password);
                localStorage.setItem('user', this.user);
                if (this.user) {
                    this.setAuth(true);
                } else {
                    this.setAuth(false);
                }

            } catch (e) {
                console.log(e)
            }
    }
    async logout() {
            try {
                localStorage.clear();
                this.setAuth(false);
            } catch (e) {
                console.log(e)

            }
    }
}