import Header from "../Main/header/Header";
import './MyProfile.css'

import { GiFireworkRocket } from "react-icons/gi";

function MyProfile() {
    return (
        <div className="notFP">
            <Header/>
            {
                localStorage.getItem('name') ?
                    <div  className="container">
                        <div className="myProfile-wrapper">
                            <h2 className="myProfile__text-title">
                                <GiFireworkRocket className="myProfile__text-title-icon" />
                                Добро пожаловать <span className="myProfile__text-title-name">{localStorage.name}</span>
                            </h2>
                            <p className="myProfile__text-item">
                               Ваш email: <span className="myProfile__text-item-in">{localStorage.email}</span>
                            </p>
                            <p className="myProfile__text-item">
                               Ваше имя: <span className="myProfile__text-item-in"> {localStorage.name} </span>
                            </p>
                            <div className="myProfile__history">
                                <h2 className="myProfile__history-title">Ваша история покупок</h2>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="container">
                        <div className="myProfile-wrapper">
                            <h2 className="myProfile__text-title">
                                Войдите в свой аккаунт или зарегистрируйтесь
                            </h2>
                        </div>
                    </div>
            }

        </div>
    )
}
export default MyProfile;