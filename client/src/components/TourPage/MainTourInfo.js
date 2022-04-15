import {Stars} from "../common/Stars"
import Accordion from "../common/Accordion"
import BookNow from "./BookNow"
import "../../style/TourPage/MainTourInfo.scss"

const MainTourInfo = ({content}) => {
    console.log(content)
    content.highlights.map(item => {
        console.log(item.moment)
    })
    return (
        <section className="tour-info">
            <div className="tour-info__wrapper">
                <div className="tour-info__container">
                    <div className="tour__head row">
                        <div className="tour__block">
                            <h1>{content.name}</h1>
                            <span className="tour__location">
                {content.region}, {content.country}
            </span>
                        </div>
                        <div className="tour__block">
                            <h3>Оценка</h3>
                            <Stars stars={content.rate}/>
                        </div>
                    </div>
                    <div className="tour__feature row">
                        <div className="tour__feature-duration row">
                            <div className="tour__feature-text">
                                <h6 className="tour__feature-title">Продолжительность</h6>
                                <span className="tour__feature-subtitle">{content.days}</span>
                            </div>
                        </div>
                        <div className="tour__feature-type row">
                            <div className="tour__feature-text">
                                <h6 className="tour__feature-title">Тип тура</h6>
                                <span className="tour__feature-subtitle">{content.type}</span>
                            </div>
                        </div>
                        <div className="tour__feature-group row">
                            <div className="tour__feature-text">
                                <h6 className="tour__feature-title">Размер группы</h6>
                                <span className="tour__feature-subtitle">{content.group} человек</span>
                            </div>
                        </div>
                        <div className="tour__feature-languages row">
                            <div className="tour__feature-text">
                                <h6 className="tour__feature-title">Язык</h6>
                                <span className="tour__feature-subtitle">{content.lang}</span>
                            </div>
                        </div>
                    </div>
                    <div className="tour__about tour-about">
                        <h2 className="tour-about__title">
                            Описание
                        </h2>
                        <p className="tour-about__subtitle">
                            {content.description}
                        </p>
                        <span className="tour-about__label-list">
                        Основные моменты
                    </span>
                        <ul className="tour-about__list">
                            {content.highlights.map(item => {
                                return <li key={item.moment} className="tour-about__list-item">
                                        <span className="tour-about__text">
                                        {item.moment}
                                        </span>
                                </li>
                            })}
                        </ul>
                    </div>
                    <div className="tour__itinerary accordion">
                        <h2>
                            Маршрут
                        </h2>
                        {content.route.map((accordion, index) => (
                                <Accordion key={index} title={`День ${index + 1}`} content={accordion.text}/>
                            )
                        )}
                    </div>
                </div>
                <BookNow content={content}/>
            </div>
        </section>
    )
}

export default MainTourInfo