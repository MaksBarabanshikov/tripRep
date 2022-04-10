import {Stars} from "../common/Stars";
import Accordion from "../common/Accordion";
import BookNow from "./BookNow";
import "../../style/TourPage/MainTourInfo.scss"


const accordionData = [
    {
        id: 0,
        title: "Какие способы оплаты доступны для пополнения счета и подключения подписки?",
        content: " Для пополнения счета вы можете использовать все доступные способы оплаты. Вы можете пополнить счет с помощью банковской карты, с помощью электронного кошелька, с помощью криптовалютного счета. В случае, если вам не подходитни один из вышеперечисленных способов оплаты - вы можете оплатить с помощью электронной кассы."
    },
    {
        id: 1,
        title: "Title 2",
        content: " Content 2"
    },
    {
        id: 2,
        title: "Title 3",
        content: " Content 3"
    },
    {
        id: 3,
        title: "Title 4",
        content: " Content 4"
    }
]

const MainTourInfo = ({content}) => {
    return (
        <section className="tour-info">
            <div className="tour-info__container">
                <div className="tour__head row">
                    <div className="tour__block">
                        <h1>{content.name}</h1>
                        <span className="tour__location">
                {content.region}, {content.country}
            </span>
                    </div>
                    <div className="tour__block">
                        <h3>Excellent</h3>
                        <Stars stars={content.rate}/>
                        <span>from 3 reviews</span>
                    </div>
                </div>
                <div className="tour__feature row">
                    <div className="tour__feature-duration row">
                        <div className="tour__feature-text">
                            <h6 className="tour__feature-title">Duration</h6>
                            <span className="tour__feature-subtitle">{content.days}</span>
                        </div>
                    </div>
                    <div className="tour__feature-type row">
                        <div className="tour__feature-text">
                            <h6 className="tour__feature-title">Tour Type</h6>
                            <span className="tour__feature-subtitle">{content.days}</span>
                        </div>
                    </div>
                    <div className="tour__feature-group row">
                        <div className="tour__feature-text">
                            <h6 className="tour__feature-title">Group Size</h6>
                            <span className="tour__feature-subtitle">{content.days}</span>
                        </div>
                    </div>
                    <div className="tour__feature-languages row">
                        <div className="tour__feature-text">
                            <h6 className="tour__feature-title">Languages</h6>
                            <span className="tour__feature-subtitle">{content.days}</span>
                        </div>
                    </div>
                </div>
                <div className="tour__about tour-about">
                    <h2 className="tour-about__title">
                        Overview
                    </h2>
                    <p className="tour-about__subtitle">
                        Start and end in San Francisco! With the in-depth cultural tour Northern California Summer 2019,
                        you
                        have a 8 day tour package taking you through San Francisco, USA and 9 other destinations in USA.
                        Northern California Summer 2019 includes accommodation as well as an expert guide, meals,
                        transport
                        and more.
                    </p>
                    <span className="tour-about__label-list">
                        HIGHLIGHTS
                    </span>
                    <ul className="tour-about__list">
                        <li className="tour-about__list-item">
                            <span className="tour-about__text">
                            Visit the Museum of Modern Art in Manhattan
                        </span>
                        </li>
                        <li className="tour-about__list-item">
                           <span className="tour-about__text">
                             Visit the Museum of Modern Art in Manhattan
                           </span>
                        </li>
                        <li className="tour-about__list-item">
                            <span className="tour-about__text">
                            Visit the Museum of Modern Art in Manhattan
                        </span>
                        </li>
                        <li className="tour-about__list-item">
                            <span className="tour-about__text">
                            Visit the Museum of Modern Art in Manhattan
                        </span>
                        </li>
                        <li className="tour-about__list-item">
                            <span className="tour-about__text">
                            Visit the Museum of Modern Art in Manhattan
                        </span>
                        </li>
                    </ul>
                </div>
                <div className="tour__itinerary accordion">
                    <h2>
                        Маршрут
                    </h2>
                    {accordionData.map(accordion => (
                            <Accordion key={accordion.id} title={accordion.title} content={accordion.content}/>
                        )
                    )}
                </div>
                <div className="tour__included tour-included">
                    <h2 className="tour-included__title">Включено/Исключено</h2>
                    <div className="tour-included__content">
                        <ul className="tour-included__list tour-included-ok">
                            <li className="tour-included__list-item">
                    <span className="tour-included__text">
                        Specialized bilingual guide
                    </span>
                            </li>
                            <li className="tour-included__list-item">
                    <span className="tour-included__text">
                        Specialized bilingual guide
                    </span>
                            </li>
                            <li className="tour-included__list-item">
                    <span className="tour-included__text">
                        Specialized bilingual guide
                    </span>
                            </li>
                            <li className="tour-included__list-item">
                    <span className="tour-included__text">
                        Specialized bilingual guide
                    </span>
                            </li>
                        </ul>
                        <ul className="tour-included__list tour-included-not">
                            <li className="tour-included__list-item">
                    <span className="tour-included__text">
                        Specialized bilingual guide
                    </span>
                            </li>
                            <li className="tour-included__list-item">
                    <span className="tour-included__text">
                        Specialized bilingual guide
                    </span>
                            </li>
                            <li className="tour-included__list-item">
                    <span className="tour-included__text">
                        Specialized bilingual guide
                    </span>
                            </li>
                            <li className="tour-included__list-item">
                    <span className="tour-included__text">
                        Specialized bilingual guide
                    </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tour__duration">
                    <h2>Duration</h2>
                    <p className="tour__duration-text">Multi day</p>
                </div>
                <div className="tour__faqs tour-faqs">
                    <h2 className="tour-faqs__title">
                        FAQs
                    </h2>
                    <div className="tour-faqs__accordion accordion">
                        {accordionData.map(accordion => (
                                <Accordion key={accordion.id} title={accordion.title} content={accordion.content}/>
                            )
                        )}
                    </div>
                </div>
                <div className="tour__reviews tour-reviews">
                    <h2 className="tour-reviews__title">
                        Reviews
                    </h2>
                    <div className="tour-reviews__box">
                        <div className="tour-reviews__rate">
                            <h1 className="tour-reviews__total-rate">
                                4
                                <span>/ 5</span>
                            </h1>
                            <p className="tour-reviews__excellent">Excellent</p>
                            <p className="tour-reviews__reviews">
                                Based on <span>3 reviews</span>
                            </p>
                        </div>
                        <div className="tour-reviews__summary">
                            <div className="tour-reviews__item">
                                <div className="tour-reviews__item-label">
                                    Excellent
                                </div>
                                <div className="tour-reviews__item-progress">
                                    <span className="tour-reviews__item-percent"/>
                                </div>
                                <div className="tour-reviews__item-number">
                                    3
                                </div>
                            </div>
                            <div className="tour-reviews__item">
                                <div className="tour-reviews__item-label">
                                    Very Good
                                </div>
                                <div className="tour-reviews__item-progress">
                                    <span className="tour-reviews__item-percent"/>
                                </div>
                                <div className="tour-reviews__item-number">
                                    3
                                </div>
                            </div>
                            <div className="tour-reviews__item">
                                <div className="tour-reviews__item-label">
                                    Average
                                </div>
                                <div className="tour-reviews__item-progress">
                                    <span className="tour-reviews__item-percent"/>
                                </div>
                                <div className="tour-reviews__item-number">
                                    3
                                </div>
                            </div>
                            <div className="tour-reviews__item">
                                <div className="tour-reviews__item-label">
                                    Poor
                                </div>
                                <div className="tour-reviews__item-progress">
                                    <span className="tour-reviews__item-percent"/>
                                </div>
                                <div className="tour-reviews__item-number">
                                    3
                                </div>
                            </div>
                            <div className="tour-reviews__item">
                                <div className="tour-reviews__item-label">
                                    Terrible
                                </div>
                                <div className="tour-reviews__item-progress">
                                    <span className="tour-reviews__item-percent"/>
                                </div>
                                <div className="tour-reviews__item-number">
                                    3
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BookNow price={content.price}/>
        </section>
    )
}

export default MainTourInfo