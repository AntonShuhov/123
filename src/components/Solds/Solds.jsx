import React, {useState, useEffect, Component} from "react";
import Header from "../Main/header/Header";
import Footer from "../Main/Footer/Footer";
import "./Solds.css"
import soldsImg from "../../img/sales/tefal.jpg"

class Solds extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeNow: Date.now(),
            endSaleTimeMil : new Date('2024-10-10').getTime(),
            gap : 0,
            dayLeft : 0,
            hrsLeft : 0,
            minLeft : 0,
            secLeft : 0,
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ timeNow: Date.now() });
            this.setState({ gap : this.state.endSaleTimeMil - this.state.timeNow});
            this.setState({ dayLeft : Math.floor(this.state.gap/ 1000 / 60 / 60 / 24) });
            this.setState({ hrsLeft : Math.floor((this.state.gap/ 1000 / 60 / 60 ) % 24)});
            this.setState({ minLeft : Math.floor((this.state.gap/ 1000 / 60 ) % 60 )});
            this.setState({ secLeft : Math.floor((this.state.gap/ 1000 ) % 60 )});
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.interval); // Очистка интервала при размонтировании компонента
    }

    render() {
        return (
            <>
            <Header/>
                 <div className="solds">
                     <div className="container">
                         <div className="solds__content">
                             <img className="solds__img" src={soldsImg} alt="soldsImg"/>
                             <div className="solds__content-wrapper">
                                 <p className="solds__text">
                                     Акция! Ваши надежные помощники на кухне от Tefal! Скидки до 54%!
                                     <span> Период проведения акции: с 12 июля по 10 ктября 2024</span>
                                 </p>
                                 <p className="solds__textEnd">До окончания акции :</p>
                                 <div className="countdown__timer" id="countdown__timer">
                                     <div className="timer"><h2 id="day">{this.state.dayLeft}</h2><p>Дней</p></div>
                                     <p className="timerBet">:</p>
                                     <div className="timer"><h2 id="hrs">{this.state.hrsLeft}</h2><p>Часов</p></div>
                                     <p className="timerBet">:</p>
                                     <div className="timer"><h2 id="min">{this.state.minLeft}</h2><p>Минут</p></div>
                                     <p className="timerBet">:</p>
                                     <div className="timer"><h2 id="sec">{this.state.secLeft}</h2><p>Секунд</p></div>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <Footer/>
                 </div>
             </>
        );
    }
}

export default Solds;


// function SoldsFunc() {
//     const [gap, setGap] = useState();
//     const [timeNow, setTimeNow] = useState(Date.now());
//     const endSaleTime = new Date('2024-10-10');
//     const endSaleTimeMil = endSaleTime.getTime();
//
//     useEffect(() => {
//         const todayDate = setInterval(() => {
//             setTimeNow(Date.now());
//         }, 500);
//
//         return () => clearInterval(todayDate);
//
//     }, []);
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setGap(endSaleTimeMil - timeNow);
//         }, 500)
//
//         return () => clearInterval(interval);
//
//     }, []);
//
//     const [ dayLeft, setDayLeft ] = useState();
//     const [ hrsLeft, setHrsLeft ] = useState();
//     const [ minLeft, setMinLeft ] = useState();
//     const [ secLeft, setSecLeft ] = useState();
//
//     useEffect(() => {
//         const timer = setInterval(() => {
//             setDayLeft(Math.floor(gap/ 1000 / 60 / 60 / 24));
//             setHrsLeft(Math.floor((gap/ 1000 / 60 / 60 ) % 24));
//             setMinLeft(Math.floor((gap/ 1000 / 60 ) % 60));
//             setSecLeft(Math.floor((gap/ 1000 ) % 60));
//         }, 500)
//
//         return () => clearInterval(timer);
//     }, []);
//
//
//     return (
//         <>
//             <Header/>
//             <div className="solds">
//                 <div className="container">
//                     <div className="solds__content">
//                         <img className="solds__img" src={soldsImg} alt="soldsImg"/>
//                         <div className="solds__content-wrapper">
//                             <p className="solds__text">
//                                 Акция! Ваши надежные помощники на кухне от Tefal! Скидки до 54%!
//                                 <span> Период проведения акции: с 12 июля по 10 ктября 2024</span>
//                             </p>
//                             <div className="countdown__timer" id="countdown__timer">
//                                 <div className="timer"><h2 id="day">{dayLeft}</h2><p>Дней</p></div>
//                                 <div className="timer"><h2 id="hrs">{hrsLeft}</h2><p>Часов</p></div>
//                                 <div className="timer"><h2 id="min">{minLeft}</h2><p>Минут</p></div>
//                                 <div className="timer"><h2 id="sec">{secLeft}</h2><p>Секунд</p></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <Footer/>
//             </div>
//         </>
//     )
// }
// export default SoldsFunc;


// CHATGPT
// import React, { useState, useEffect } from 'react';
//
// function Clock() {
//     const [time, setTime] = useState(new Date());
//
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTime(new Date());
//         }, 1000);
//
//         return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
//     }, []);
//
//     return (
//         <div>
//             <p>Current time: {time.toLocaleTimeString()}</p>
//         </div>
//     );
// }
//
// export default Clock;
