import Header from "../Main/header/Header";
import './Product.css'
import {Context} from "../../App";
import {useContext} from "react";


function Product() {
    const {store} = useContext(Context);

    return (
        <div className="notFP">
            <Header/>
            <div className="container">
                <div className="notFp__wrapper">
                    <p className="notFP__mainPar">
                        404<br/>
                        Product NOE
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Product;