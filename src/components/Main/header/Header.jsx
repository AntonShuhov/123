import './Header.css';
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../../../App";
import {observer} from "mobx-react-lite";
import { Link } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import logoImg from './../../../img/icons/logo.png';
import {
        GiPerfumeBottle, GiWashingMachine, GiVibratingSmartphone, GiPriceTag
       } from "react-icons/gi";
import { MdOutlinePets, MdOutlineSportsTennis, MdLocalMall } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { FaComputer, FaArrowTurnUp } from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";
import { PiSprayBottleLight } from "react-icons/pi";
import { FaCocktail, FaUserAstronaut } from "react-icons/fa";

import Modal from "../Modal/Modal";

function Header() {
    const [modalActive, setModalActive] = useState(false);

    const [modalAuthorizationType, setModalAuthorizationType] = useState(false);

    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const {store} = useContext(Context);

    const status = store.status;
    useEffect(() => {
        if (store.status) {
            toast(status);
        }
    }, [status]);

    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <Link to="/" className="header__logo">
                        <img className="header__logo__img" src={logoImg} alt="logoImg"/>
                        <span className="header__logo-text">MOBILESHOP</span>
                    </Link>
                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            <li><Link to="/" className="header__nav-link" >Главная</Link></li>
                            <li className="header__nav-btn-catalog-wrapper">
                                <button className="header__nav-btn-catalog">
                                    Каталог
                                </button>

                                <ul className='header__nav-catalog'>
                                    <li className="header__nav-item"><MdLocalMall className="header__nav-item-icon"/>
                                        <a href="/products" className="header__nav-item-link">Все товары</a>
                                    </li>
                                    <li className="header__nav-item"><GrPersonalComputer className="header__nav-item-icon"/>
                                        <a href="#!" className="header__nav-item-link">Ноутбуки</a>
                                    </li>
                                    <li className="header__nav-item"><FaComputer className="header__nav-item-icon"/>
                                        <a href="#!" className="header__nav-item-link">Компьютеры</a>
                                    </li>
                                    <li className="header__nav-item"><GiVibratingSmartphone className="header__nav-item-icon"/>
                                        <a href="#!" className="header__nav-item-link">Смартфоны</a>
                                    </li>
                                    <li className="header__nav-item"><GiWashingMachine className="header__nav-item-icon"/>
                                        <a href="#!" className="header__nav-item-link">Бытовая техника</a>
                                    </li>
                                    <li className="header__nav-item"><BsTools className="header__nav-item-icon"/>
                                        <a href="#!" className="header__nav-item-link">Инструменты</a>
                                    </li>
                                    <li className="header__nav-item"><MdOutlinePets className="header__nav-item-icon"/>
                                        <a href="#!" className="header__nav-item-link">Зоотовары</a>
                                    </li>
                                    <li className="header__nav-item"><MdOutlineSportsTennis className="header__nav-item-icon"/>
                                        <a href="#!" className="header__nav-item-link">Спорт-товары</a>
                                    </li>
                                    <li className="header__nav-item"><PiSprayBottleLight className="header__nav-item-icon"/>
                                        <a href="#!" className="header__nav-item-link">Бытовая химия</a>
                                    </li>
                                    <li className="header__nav-item"><GiPerfumeBottle className="header__nav-item-icon"/>
                                        <a href="#!" className="header__nav-item-link">Парфюмерия</a>
                                    </li>
                                    <li className="header__nav-item"><FaCocktail className="header__nav-item-icon"/>
                                        <a href="#!" className="header__nav-item-link">Алкоголь</a>
                                    </li>
                                    <li className="header__nav-item"><GiPriceTag className="header__nav-item-icon"/>
                                        <a href="#!" className="header__nav-item-link">Акции</a>
                                    </li>
                                </ul>

                            </li>


                            <li><Link to="/about" className="header__nav-link">Про нас</Link></li>
                            <li><Link to="/solds" className="header__nav-link">Акции</Link></li>
                            <li  className={`header__nav-user ${store.isAuth ? "userActive" : ""}`} >
                                <button onClick={() => {
                                    setUserMenuOpen(!userMenuOpen);
                                }}> {
                                    localStorage.getItem('name') ? <div>
                                                    <FaUserAstronaut/> <span className="header__nav-userEmail" >{localStorage.getItem('name') ? `${localStorage.name}` : ''}</span>
                                                   </div> :
                                        <FaArrowTurnUp className="header__nav-userEmailEnter"/>
                                    }

                                </button>
                            </li>
                            <li><button className={`header__nav-btn ${localStorage.getItem('name') ? "passive" : ""}`} onClick={() => setModalActive(true)}>
                                Войти
                            </button></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <ul className={`header__nav-usermenu ${userMenuOpen ? "active" : ""}`}>
                {
                    localStorage.getItem('name') ? <><li className="header__nav-usermenu-item" onClick={() => {
                        store.logout();
                        setUserMenuOpen(false); }}

                    >Выйти</li>
                        <li className="header__nav-usermenu-item">Личный кабинет</li></> : <li>Войдите или зарегистрируйтесь в личном кабинете</li>
                }

            </ul>
            <ToastContainer autoClose={2000}/>

            <Modal active={modalActive} setActive={setModalActive}>
                {
                    !modalAuthorizationType ?
                        <div className="modal__login-container">
                            <form onSubmit={e => e.preventDefault()}>
                                <h4 className="modal__login-title">Введите логин и пароль</h4>
                                <p className="modal__login-helpText">логин</p>
                                <input
                                    className="modal__login-login"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    type="text"
                                    placeholder="email"
                                />
                                <p className="modal__login-helpText">пароль</p>
                                <input
                                    className="modal__login-password"
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    type="password"
                                    placeholder="Пароль"
                                />
                            </form>
                            <div className="modal__login-submit-wrapper">
                                <button
                                    className="modal__login-submit"
                                    type="submit"
                                    onClick={() => {
                                        store.userLogin(email, password);
                                        setModalActive(false);
                                        setModalActive(false);
                                        setEmail('');
                                        setName('');
                                        setPassword('');
                                        // console.log(store.user);
                                    }}
                                >
                                    Войти
                                </button>
                                <button
                                    className="modal__login-switch"
                                    onClick={() => { setModalAuthorizationType(true) }}
                                >
                                    Регистрация
                                </button>
                            </div>

                        </div>

                        :

                        <div className="modal__login-container">
                            <form onSubmit={e => e.preventDefault()}>
                                <h4 className="modal__login-title">Введите данные для регистрации</h4>
                                <p className="modal__login-helpText">логин</p>
                                <input
                                    className="modal__login-login"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    type="text"
                                    placeholder="email"
                                />
                                <p className="modal__login-helpText">имя пользователя</p>
                                <input
                                    className="modal__login-login"
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                    type="text"
                                    placeholder="name"
                                />
                                <p className="modal__login-helpText">пароль</p>
                                <input
                                    className="modal__login-password"
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    type="password"
                                    placeholder="Пароль"
                                />
                            </form>
                            <div className="modal__login-submit-wrapper">
                                <button
                                    className="modal__login-submit"
                                    type="submit"
                                    onClick={() => {
                                        store.userRegistration(email, name, password);
                                        setModalActive(false);
                                        setModalActive(false);
                                        setEmail('');
                                        setName('');
                                        setPassword('');
                                    }}
                                >
                                    Зарегистрироваться
                                </button>
                                <button
                                    className="modal__login-switch"
                                    type="submit"
                                    onClick={() => { setModalAuthorizationType(false) }}
                                >
                                    Есть аккаунт?
                                </button>
                            </div>
                        </div>
                }
            </Modal>
        </header>

    )
}
export default observer(Header);
