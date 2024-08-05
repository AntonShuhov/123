import {makeAutoObservable} from "mobx";
import axios from "../utils/axios";

export default class Store {
    user = {
        email : '',
        name : '',
        token: '',
    };
    isAuth = false;
    isLoading = false;
    status = '';

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setStatus(message) {
        this.status = message;
    }
    setUser(email, password, token) {
        this.user.email = email;
        this.user.password = password;
        this.user.token = token;
    }

    async userRegistration({email, password}) {
        try {
            const { data } = await axios.post('/auth/register', {
                email,
                password,
            });
            if(data.token) {
                window.localStorage.setItem('token', data.token)
            }
            return data;
        } catch (e) {
            console.log(e)
        }
    }

    async login(email, password) {
            try {
                this.setUser(email, password);
                localStorage.setItem('user', this.user.email);
                console.log(localStorage.getItem('user'));
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