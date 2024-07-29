import Header from "./header/Header";
import Promo from "./promo/Promo";
import Brands from "./brands/Brands";
import Arrivals from "./arrivals/Arrivals";
import Sales from "./Sales/Sales";
import Footer from "./Footer/Footer";

function Main() {
    return (
        <div>
            <Header/>
            <Promo/>
            <Brands/>
            <Arrivals/>
            <Sales/>
            <Footer/>
        </div>
    )
}
export default Main;