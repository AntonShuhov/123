import './Brands.css';

import asus from'./../../../img/brands/asus.png';
import casio from'./../../../img/brands/casio.png';
import lenovo from'./../../../img/brands/lenovo.png';
import sony from'./../../../img/brands/sony.png';
import dell from'./../../../img/brands/dell.png';
import mi from'./../../../img/brands/Mi.png';
import samsa from'./../../../img/brands/samsung.png';

function Brands() {
    return (
        <section className="brands">

                    <ul className="brands__list">
                        <li>
                            <a href="#!"><img className="brands__list-pic" src={asus} alt="brandAsus"/></a>
                        </li>
                        <li>
                            <a href="#!"><img className="brands__list-pic" src={dell} alt="brandAsus"/></a>
                        </li>
                        <li>
                            <a href="#!"><img className="brands__list-pic" src={casio} alt="brandCasio"/></a>
                        </li>
                        <li>
                            <a href="#!"><img className="brands__list-pic" src={mi} alt="brandAsus"/></a>
                        </li>
                        <li>
                            <a href="#!"><img className="brands__list-pic" src={lenovo} alt="brandLenovo"/></a>
                        </li>
                        <li>
                            <a href="#!"><img className="brands__list-pic" src={samsa} alt="brandAsus"/></a>
                        </li>
                        <li>
                            <a href="#!"><img className="brands__list-pic" src={sony} alt="brandSony"/></a>
                        </li>
                    </ul>

        </section>
    )
}

export default Brands;