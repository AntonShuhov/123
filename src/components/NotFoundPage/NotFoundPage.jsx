import Header from "../Main/header/Header";
import './NotFoundPage.css'

function NotFoundPage() {
    return (
        <div className="notFP">
            <Header/>
            <div className="container">
                <div className="notFp__wrapper">
                    <p className="notFP__mainPar">
                        404<br/>
                        Page didn`t found, try something another)
                    </p>
                </div>
            </div>
        </div>
    )
}
export default NotFoundPage;