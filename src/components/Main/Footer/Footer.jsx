import "./Footer.css";

import facebookImg from './../../../img/footer/facebook.svg';
import youtubeImg from './../../../img/footer/youtube.svg';
import instaImg from './../../../img/footer/insta.svg';
import telegaImg from './../../../img/footer/telega.svg';
import viberImg from './../../../img/footer/viber.svg';

import GpayImg from './../../../img/footer/gpay-logo.svg';
import ApayImg from './../../../img/footer/applepay-logo.svg';
import VisaImg from './../../../img/footer/visa-logo.svg';
import MasterCardImg from './../../../img/footer/mastercard-logo.svg';


function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__info">
                        <div>
                            <p className="footer__info-title">MOBILESHOP</p>
                            <ul className="footer__info-list">
                                <li className="footer__info-list-item"><a href="*">Карьера</a></li>
                                <li className="footer__info-list-item"><a href="#!">Служба поддержки</a></li>
                                <li className="footer__info-list-item"><a href="#!">Адреса магазинов</a></li>
                                <li className="footer__info-list-item"><a href="#!">Про компанию</a></li>
                                <li className="footer__info-list-item"><a href="#!">Новости</a></li>
                                <li className="footer__info-list-item"><a href="#!">Оптовым клиентам</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className="footer__info-title">Новинки Apple</p>
                            <ul className="footer__info-list">
                                <li className="footer__info-list-item"><a href="#!">Apple watch 9</a></li>
                                <li className="footer__info-list-item"><a href="#!">MacBook Air M3</a></li>
                                <li className="footer__info-list-item"><a href="#!">IPad PRo</a></li>
                                <li className="footer__info-list-item"><a href="#!">MacBook Pro M3</a></li>
                                <li className="footer__info-list-item"><a href="#!">AirPods Max</a></li>
                                <li className="footer__info-list-item"><a href="#!">IPhone 14 Pro</a></li>
                                <li className="footer__info-list-item"><a href="#!">IPhone 15 Pro</a></li>
                                <li className="footer__info-list-item"><a href="#!">IPhone 15 Plus</a></li>
                                <li className="footer__info-list-item"><a href="#!">IPhone 14 Pro Max</a></li>
                                <li className="footer__info-list-item"><a href="#!">IPhone 15</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className="footer__info-title">Категории</p>
                            <ul className="footer__info-list">
                                <li className="footer__info-list-item"><a href="#!">Аудио</a></li>
                                <li className="footer__info-list-item"><a href="#!">Техника Samsung</a></li>
                                <li className="footer__info-list-item"><a href="#!">Смартфоны</a></li>
                                <li className="footer__info-list-item"><a href="#!">Техника для кухни</a></li>
                                <li className="footer__info-list-item"><a href="#!">Ноутбуки</a></li>
                                <li className="footer__info-list-item"><a href="#!">Телевизоры</a></li>
                                <li className="footer__info-list-item"><a href="#!">Для сада и дома</a></li>
                                <li className="footer__info-list-item"><a href="#!">Умный дом</a></li>
                                <li className="footer__info-list-item"><a href="#!">Красота и здоровье</a></li>
                                <li className="footer__info-list-item"><a href="#!">Фото и видео</a></li>
                                <li className="footer__info-list-item"><a href="#!">ПК и комплектующие</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className="footer__info-title">Клиентам</p>
                            <ul className="footer__info-list">
                                <li className="footer__info-list-item"><a href="#!">Публичная оферта</a></li>
                                <li className="footer__info-list-item"><a href="#!">Видео обзоры</a></li>
                                <li className="footer__info-list-item"><a href="#!">Доставка</a></li>
                                <li className="footer__info-list-item"><a href="#!">Оплата</a></li>
                                <li className="footer__info-list-item"><a href="#!">Гарантийные условия</a></li>
                                <li className="footer__info-list-item"><a href="#!">Акции, розыгрыши</a></li>
                                <li className="footer__info-list-item"><a href="#!">Инструкции</a></li>
                                <li className="footer__info-list-item"><a href="#!">Прошивки</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__links">
                        <ul className="footer__socials">
                            <li> <a href="#!"><img className="footer__socials-img" src={facebookImg} alt="facebookImg"/></a> </li>
                            <li> <a href="#!"><img className="footer__socials-img" src={youtubeImg} alt="youtubeImgImg"/></a> </li>
                            <li> <a href="#!"><img className="footer__socials-img"  src={instaImg} alt="instaImgImg"/></a> </li>
                            <li> <a href="#!"><img className="footer__socials-img"  src={telegaImg} alt="telegaImg"/></a> </li>
                            <li> <a href="#!"><img className="footer__socials-img"  src={viberImg} alt="viberImg"/></a></li>
                        </ul>
                        <div className="footer__pay">
                            <img className="footer__pay-img" src={GpayImg} alt="GpayImg"/>
                            <img className="footer__pay-img" src={ApayImg} alt="ApayImg"/>
                            <img className="footer__pay-img" src={VisaImg} alt="VisaImg"/>
                            <img className="footer__pay-img" src={MasterCardImg} alt="MasterCardImg"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;