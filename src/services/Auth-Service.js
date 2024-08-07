import $api from "../http";
import {AxiosResponse} from "axios";

export default class AuthService {
    static async login(email, password) {
        return $api.post('/login', {email, password})
    }

    static async registration(email, name, password) {
        return $api.post('/registration', {email, name, password})
    }

    static async logout() {
        return $api.post('/logout')
    }
}