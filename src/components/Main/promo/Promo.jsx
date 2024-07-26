import './Promo.css';

import promoImg from './../../../img/images/promoImg.png';

function Promo() {

    return (
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                        <div className="promo__title">
                            <span className="promo__title-line1">
                                <span>Крепкий.</span>
                            </span> <br/>
                            Легкий.<br/>
                            Профессиональный.<br/>
                        </div>
                        <div className="promo__desc">
                             <span className="promo__desc-cont">
                                 <span>Iphone 15 PRO.</span> 
                             </span>
                        </div>
                        <div className="promo__btn-wrapper">
                            <a href="#!" className="promo__btn">Купить</a>
                        </div>
                    </div>
                    <div className="promo-img">
                        <img src={promoImg} alt="promoImg"/>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Promo;