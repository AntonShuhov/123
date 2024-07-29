import './Promo.css';

import promoImg from './../../../img/images/promoImg.png';

function Promo() {

    return (
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">
                        <div className="promo__title">
                            <p className="promo__title-line up">КРЕПКИЙ.</p>
                            <p className="promo__title-line mid">Легкий.</p>
                            <p className="promo__title-line down">Профессиональный.</p>
                        </div>
                        <p className="promo__desc">
                            Iphone 15 PRO.
                        </p>
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