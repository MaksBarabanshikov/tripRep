import {TourContext} from "../context/TourContext"
import {TourCard} from "./common/TourCard"
import {useContext} from "react"
import Loader from "./common/Loader"
import Slider from "react-slick"
import image1 from "../img/backgrounds/tourCard1.jpg"
import image2 from "../img/backgrounds/tourCard2.jpg"
import image3 from "../img/backgrounds/tourCard3.jpg"
import "../style/MainTour.scss"
import "slick-carousel/slick/slick.scss"
import "slick-carousel/slick/slick-theme.scss"

export const MainTour = () => {
    const context = useContext(TourContext)
    const settingsSlider = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <section className="tour site-section">
            <div className="tour__container container">
                <div className="head-title">
                    <div className="tour__heading heading">
                        <h2 className="tour__title">
                            Туры
                        </h2>
                    </div>
                </div>
                <Slider {...settingsSlider}>
                    {
                        !!context.tourData ? context.tourData.map(
                                card => (
                                    <TourCard
                                        key={card._id}
                                        card={card}
                                    />
                                )
                            )
                            : <Loader/>

                    }
                </Slider>
            </div>
        </section>
    )
}