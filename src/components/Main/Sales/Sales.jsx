import './Sales.css';
import SimpleSlider from "./Slider/Slider";

function Sales() {
    return (
        <section className="sales">
            <div className="container">
                <div className="sales__content">
                    <h2 className='sales__title'>SALES</h2>
                    <SimpleSlider/>
                </div>
            </div>
        </section>
    )
}

export default Sales;