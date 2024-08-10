import React, {useState, useEffect} from 'react';
import Header from "../Main/header/Header";
import "./AdminPanel.css"
import {observer} from "mobx-react-lite";

function AdminPanel() {

    // const [products, setProducts] = useState([]);

    const [product, setProduct] = useState({
        title: '',
        category: '',
        brand: '',
        name: '',
        price: '',
        description: '',
        features: '',
        image: null
    });

    // useEffect(() => {
    //     fetchProducts();
    // }, []);

    // const fetchProducts = async () => {
    //     const res = await axios.get('http://localhost:5000/api/products');
    //     setProducts(res.data);
    //     console.log(products);
    // };
    const handleInputChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };
    //
    const handleFileChange = (e) => {
        setProduct({ ...product, image: e.target.files[0] });
    };

    const nandleSubmit = () => {
        // e.preventDefault();
        // const formData = new FormData();

        // formData.append('title', product.title);
        // formData.append('category', product.category);
        // formData.append('brand', product.brand);
        // formData.append('name', product.name);
        // formData.append('price', product.price);
        // formData.append('description', product.description);
        // formData.append('features', product.features);
        // formData.append('image', product.image);
        console.log('EEEBLEET');

        console.log(product);
        console.log('EEEBLEET');

    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('name', product.name);
    //     formData.append('description', product.description);
    //     formData.append('price', product.price);
    //     formData.append('features', product.features);
    //
    //     if (product.image) formData.append('image', product.image);
    //
    //     await console.log(formData);
    //     for (let pair of formData.entries()) {
    //         console.log(pair[0] + ', ' + pair[1]);
    //     }
    //
    //     try {
    //         await axios.post('http://localhost:5000/api/products', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             }
    //         });
    //         await fetchProducts();
    //     } catch (error) {
    //         console.error('Error uploading the product', error);
    //     }
    //
    //     // await axios.post('http://localhost:5000/products', formData);
    //     // await fetchProducts();
    // };

    return (
        <>
            <Header/>
            <button onClick={console.log("click")}>Add Click</button>
            <div className="adminPanel">
                <div className='container'>
                    <div className="adminPanel__content">
                        <h1 className="adminPanel__title">Admin Panel</h1>
                        <form onSubmit={nandleSubmit} className="adminPanel__form">
                            <input className="adminPanel__form-item" type="text" name="title" value={product.title} onChange={handleInputChange} placeholder="Title" />
                            <input className="adminPanel__form-item" type="text" name="category" value={product.category} onChange={handleInputChange} placeholder="category" />
                            <input className="adminPanel__form-item" type="text" name="brand" value={product.brand} onChange={handleInputChange} placeholder="brand" />
                            <input className="adminPanel__form-item" type="text" name="name" value={product.name} onChange={handleInputChange} placeholder="Name" />
                            <input className="adminPanel__form-item" type="number" name="price" value={product.price} onChange={handleInputChange} placeholder="Price" />
                            <input className="adminPanel__form-item" type="text" name="description" value={product.description} onChange={handleInputChange} placeholder="Description" />
                            <input className="adminPanel__form-item" type="text" name="features" value={product.features} onChange={handleInputChange} placeholder="features" />
                            <input className="adminPanel__form-item" type="file" onChange={handleFileChange} />
                            {/*<button className="adminPanel__form-item" type="submit" onSubmit={console.log("bebra")}>Add Product</button>*/}
                        </form>
                        <button className="adminPanel__form-item"  onClick={console.log("click")}>Add Click</button>
                    </div>
                </div>
            </div>
        </>
    )
}


export default AdminPanel;

