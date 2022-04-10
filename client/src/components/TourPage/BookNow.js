import BookNowCount from "./BookNowCount"
import "../../style/TourPage/BookNow.scss"

const BookNow = ({price}) => {
    return(
        <div className="book-now">
            <div className="book-now__content">
                <div className="book-now__heading">
                    <h1 className="book-now__head">
                        <span>От</span>
                        {price}
                    </h1>
                </div>
                <div className="book-now__date book-now__section">
                    <div className="book-now__block">
                        <h3 className="book-now__title">
                            Date
                        </h3>
                        <span className="book-now__subtitle">
                            10/04/2022
                        </span>
                    </div>
                </div>
                <div className="book-now__adults book-now__section">
                    <div className="book-now__block">
                        <h3 className="book-now__title">
                            Adults
                        </h3>
                        <span className="book-now__subtitle">
                        Age 18+
                    </span>
                    </div>
                    <BookNowCount/>
                </div>
                <div className="book-now__children book-now__section">
                    <div className="book-now__block">
                        <h3 className="book-now__title">
                            Children
                        </h3>
                        <span className="book-now__subtitle">
                        Age 6-17
                    </span>
                    </div>
                    <BookNowCount/>
                </div>
                <div className="book-now__infant book-now__section">
                    <div className="book-now__block">
                        <h3 className="book-now__title">
                            Infant
                        </h3>
                        <span className="book-now__subtitle">
                        Age 0-5
                    </span>
                    </div>
                    <BookNowCount/>
                </div>
            </div>
            <div className="book-now__submit">
                <button className="book-now__btn">
                    Заказать сейчас
                </button>
            </div>
        </div>
    )
}

export default BookNow