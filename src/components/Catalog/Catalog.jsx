import React from "react";
import Header from "../Main/header/Header";
import Footer from "../Main/Footer/Footer";

function Catalog() {
    return (
        <div className="catalog">
            <Header/>
            <div className="catalog">
                <p>Category 1</p>
                <p>Category 2</p>
                <p>Category 3</p>
                <p>Category 4</p>
                <p>Category 5</p>
                <p>Category 6</p>
                <p>Category 7</p>
            </div>
            <Footer/>
        </div>
    )
}
export default Catalog;