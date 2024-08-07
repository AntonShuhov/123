import {makeAutoObservable} from "mobx";
import $api from "../utils/axios";

export default class Store {
    user = {
        email : '',
        name : '',
        password : '',
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
    setUser(email, name, password ) {
        this.user.email = email;
        this.user.name = name;
        this.user.password = password;
    }

    async userRegistration(email, name, password) {
        try {
            const response = await $api.post('/auth/register', {
                email,
                name,
                password,
            });
            if(response.data.token) {
                window.localStorage.setItem('token', response.data.token);
                window.localStorage.setItem('name', response.data.newUser.name);
                window.localStorage.setItem('status', response.data.message);
            } else {
                window.localStorage.setItem('status', response.data.message);
                this.setStatus(localStorage.status);
            }
            this.setAuth(true);
            this.setUser(response.data.newUser.email, response.data.newUser.name, response.data.newUser.password);
            this.setStatus(response.data.message);
        } catch (error) {
            console.log(error);
        }
    }

    async userLogin(email, password) {
        try {
            const response = await $api.post('/auth/login', {
                email,
                password,
            });
            if(response.data.token) {
                window.localStorage.setItem('token', response.data.token);
                window.localStorage.setItem('name', response.data.existUser.name);
                window.localStorage.setItem('status', response.data.message);
            } else {
                window.localStorage.setItem('status', response.data.message);
                this.setStatus(localStorage.status);
            }
            await this.setAuth(true);
            await this.setUser(response.data.existUser.email, response.data.existUser.name, response.data.existUser.password);
            await this.setStatus(response.data.message);
            console.log(`this user ${this.user}`);
            console.log(`this user.name ${this.user.name}`);
            console.log('response ',  JSON.stringify(response));
            console.log('response.data ',  JSON.stringify(response.data));

            console.log(`response.data.existUser ${response.data.existUser}`);
            console.log(`response.data.existUser.name ${response.data.existUser.name}`);
        } catch (error) {
            console.log(error);
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

