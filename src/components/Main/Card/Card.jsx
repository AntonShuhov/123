import styles from "./Card.module.css";

import arrowDollar from "../../../img/cards/dollar-arrow.svg"

const Card = (props) => {

        return (
            <div className={styles.card}>
                <a href="#!" className={styles.card__link}/>
                <img className={styles.card__img} src={props.cardImg} alt="cardPic"/>
                <div className={styles.card__body}>
                    <div className={styles.card__text}>
                        <div className={styles.card__title}>
                            {props.title}
                        </div>
                        <div className={styles.card__muted}>Купить сейчас!</div>
                    </div>
                    <img className={styles.arrowDollar} src={arrowDollar} alt="-->"/>
                </div>
            </div>
        );
}

export default Card;