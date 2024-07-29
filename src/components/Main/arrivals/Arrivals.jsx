import './Arrivals.css';
import Card from "../Card/Card";

import cardImg1 from "../../../img/cards/15pro.png"
import cardImg2 from "../../../img/cards/14pro.png"
import cardImg3 from "../../../img/cards/13pro.png"

function Arrivals() {
    return (
        <section className="arrivals">
            <div className="container">
                <div className="arrivals__header">
                    <span className="arrivals__title">
                        <span>NEW ARRIVALS</span>
                    </span>
                </div>
                <div className="arrivals__cards">
                    <Card title="Iphone 15 Pro Max" cardImg={cardImg1}/>
                    <Card title="Iphone 14 Pro Max" cardImg={cardImg2}/>
                    <Card title="Iphone 13 Pro Max" cardImg={cardImg3}/>
                    <Card title="Iphone 14 Pro Max" cardImg={cardImg2}/>
                    <Card title="Iphone 13 Pro Max" cardImg={cardImg3}/>
                    <Card title="Iphone 15 Pro Max" cardImg={cardImg1}/>
                </div>
            </div>
        </section>
    )

}

export default Arrivals;