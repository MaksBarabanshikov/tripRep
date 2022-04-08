import {TourCard} from "./common/TourCard"
import "../style/MainTour.scss"
import {useCallback, useEffect, useState} from "react";
import {useHttp} from "../hooks/http.hook";
import axios from "axios";

export const MainTour = () => {
    const {request} = useHttp()
    const [tours, setTours] = useState(null)
    const [loading, setLoading] = useState(false)


    useEffect(() => {

        const getCard = async () => {
            try {
                await axios.get('/api/card', {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(response => {
                        console.log(response.data)
                        setTours(response.data)
                    })
            } catch (e) {
                console.log(e)
            }
        }
        getCard()
    }, [])

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
                        {
                            !!tours ? tours.map(
                                card => (
                                    <TourCard
                                        key={card._id}
                                        card={card}
                                    />
                                )
                            )
                                : <h1>Загрузка...</h1>

                        }
                    </div>
                </div>
            </div>
        </section>
    )
}