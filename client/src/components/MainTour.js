import {TourCard} from "./common/TourCard"
import "../style/MainTour.scss"

export const MainTour = () => {
    return (
        <section className="tour site-section">
            <div className="tour__container container">
                <div className="head-title">
                    <div className="tour__heading heading">
                        <h2 className="tour__title">
                            Feature Hiking Tours
                        </h2>
                    </div>
                </div>
                <div className="tour__owl-stage-outer">
                    <div className="tour__owl-stage">
                        <TourCard
                            stars="global-five"
                            src="https://shinetheme.com/travelerdata/hikingtourdemo/wp-content/uploads/2015/01/Indipendant-Travel1-2000x1250-680x500.jpg"
                            location="Ural"
                            title="Northern Ural Summer 2019"
                            days="5 "
                            price="50,00"
                        />
                        <TourCard
                            stars="global-three"
                            src="https://shinetheme.com/travelerdata/hikingtourdemo/wp-content/uploads/2015/01/iStock_000037401046XXXLarge-680x500.jpg"
                            location="Ural"
                            title="Northern Ural Summer 2019"
                            days="5 "
                            price="50,00"
                        />
                        <TourCard
                            stars="global-zero"
                            src="https://shinetheme.com/travelerdata/hikingtourdemo/wp-content/uploads/2015/01/detail_1-680x500.jpg"
                            location="Ural"
                            title="Northern Ural Summer 2019"
                            days="5 "
                            price="50,00"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}