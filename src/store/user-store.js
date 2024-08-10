import {makeAutoObservable} from "mobx";
import $api from "../utils/axios";
import {toast} from "react-toastify";


export default class UserStore {
    user = {
        email : '',
        name : '',
        password : '',
    };
    isAuth = false;
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
                window.localStorage.setItem('email', response.data.newUser.email);
                window.localStorage.setItem('name', response.data.newUser.name);
                window.localStorage.setItem('status', response.data.message);
                toast(localStorage.status);
            } else {
                window.localStorage.setItem('status', response.data.message);
                this.setStatus(localStorage.status);
                toast(response.data.message);
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
                window.localStorage.setItem('email', response.data.existUser.email);
                window.localStorage.setItem('name', response.data.existUser.name);
                window.localStorage.setItem('status', response.data.message);
                toast(localStorage.status);
            } else {
                window.localStorage.setItem('status', response.data.message);
                this.setStatus(localStorage.status);
                toast(localStorage.status);
            }
            await this.setAuth(true);
            await this.setUser(response.data.existUser.email, response.data.existUser.name, response.data.existUser.password);
            await this.setStatus(response.data.message);
        } catch (error) {
            console.log(error);
        }
    }

    async logout() {
            try {
                localStorage.clear();
                this.setAuth(false);
                this.setStatus('');
                this.setUser('', '', '');
                toast('Вы вышли из своего аккаунта');

            } catch (e) {
                console.log(e)

            }
    }

    async userMyProfile() {
        try {
            const response = await $api.get('/auth/myProfile');

            await this.setAuth(true);
            await this.setUser(response.data.existUser.email, response.data.existUser.name, response.data.existUser.password);
            await this.setStatus(response.data.message);

        } catch (error) {
            console.log(error);
        }
    }
}

