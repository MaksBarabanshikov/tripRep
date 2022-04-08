import {useState} from "react"
import {Stars} from "./Stars";
import {Link} from "react-router-dom";
import tourCardImage1 from "../../img/backgrounds/tourCard1.jpg"
import "../../style/common/TourCard.scss"

// const tourCardData = [
//     {
//         id: '624ef40dde2cfa6c7cbdddf7',
//         src: tourCardImage1
//     },
//     {
//         id: '624ef40dde2cfa6c7cbdddf8',
//         src: tourCardImage2,
//     },
//     {
//         id: '624ef40dde2cfa6c7cbdddf9',
//         src: tourCardImage3,
//     },
// ]


// const getImage = (id) => (
//     [...tourCardData].map(image => {
//         if (id === image.id) {
//             console.log(image.src)
//             return image.src
//         }
//     })
// )

export const TourCard = ({card}) => {
    let [counter, setCounter] = useState(0)

    let handleReview = () => {
        setCounter(++counter)
    }

    return (
        <div className="tour-card">
            <div className="tour-card__thumb">
                <Link to={`/tour/${card._id}`} className="tour-card__link" onClick={handleReview}>
                    <img src={tourCardImage1} alt="Theme"/>
                </Link>
            </div>
            <p className="tour-card__location">
                {`${card.region}, ${card.country}`}
            </p>
            <h4 className="tour-card__title">
                {card.name}
            </h4>
            <div className="tour-card__review row">
                <Stars stars={card.rate}/>
                <span className="tour-card__count">
                  {counter} Reviews
              </span>
            </div>
            <div className="tour-card__footer row">
                <div className="tour-card__duration">
                    {card.days}
                </div>
                <div className="tour-card__price">
                  <span className="tour-card__fr-text">
                      from
                  </span>
                    <span className="tour-card__price-text">
                       {card.price}
                  </span>
                </div>
            </div>
        </div>
    )
}