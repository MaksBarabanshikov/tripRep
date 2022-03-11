import {useState} from "react"
import {Stars} from "./Stars";
import "../../style/common/TourCard.scss"

export const TourCard = props => {
    let [counter, setCounter] = useState(0)

    let handleReview = event => {
        event.preventDefault()
        setCounter(++counter)
    }


    return (
        <div className="tour-card">
            <div className="tour-card__thumb">
                <a href="#" className="tour-card__link" onClick={handleReview}>
                    <img src={props.src} alt="Theme"/>
                </a>
            </div>
            <p className="tour-card__location">
                {props.location},
                Russia
            </p>
            <h4 className="tour-card__title">
                {props.title}
            </h4>
            <div className="tour-card__review row">
                <Stars stars={props.stars}/>
                <span className="tour-card__count">
                  {counter} Reviews
              </span>
            </div>
            <div className="tour-card__footer row">
                <div className="tour-card__duration">
                    {props.days}
                    days
                </div>
                <div className="tour-card__price">
                  <span className="tour-card__fr-text">
                      from
                  </span>
                    <span className="tour-card__price-text">
                       € {props.price}
                  </span>
                </div>
            </div>
        </div>
    )
}