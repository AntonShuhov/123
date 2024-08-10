import {makeAutoObservable} from "mobx";
import $api from "../utils/axios";
import {toast} from "react-toastify";

export default class ProductStore {
    products = [];

    product = {
        title: '',
        category: '',
        brand: '',
        name: '',
        price: '',
        description: '',
        features: '',
        image: null
    };
    status = '';

    constructor() {
        makeAutoObservable(this);
    }
    setStatus(message) {
        this.status = message;
    }
    addToProducts(product){
        this.products = this.products.push(product);
    }
    setProduct( title, category, brand, name, price, description, features, image ){
            this.title = title;
            this.category = category;
            this.brand = brand;
            this.name = name;
            this.price = price;
            this.description = description;
            this.features = features;
            this.image = image;
    }
    async productRegistration(title, category, brand, name, price, description, features, image) {
        try {
            const response = await $api.post('/product/createProduct', {
                title,
                category,
                brand,
                name,
                price,
                description,
                features,
                image,
            });
            if(response.data.token) {
                window.localStorage.setItem('status', response.data.message);
                toast(localStorage.status);
            } else {
                window.localStorage.setItem('status', response.data.message);
                this.setStatus(localStorage.status);
                toast(response.data.message);
            }
            this.setUser(response.data.newUser.email, response.data.newUser.name, response.data.newUser.password);
            this.setStatus(response.data.message);
        } catch (error) {
            console.log(error);
        }
    }




}