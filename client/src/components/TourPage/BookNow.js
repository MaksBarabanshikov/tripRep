import {useEffect, useState} from "react"
import Calendar from "react-calendar"
import {Link, useLocation, useNavigate} from "react-router-dom";
import "../../style/TourPage/BookNow.scss"
import 'react-calendar/dist/Calendar.css'
import Modal from "../common/Modal";

const BookNow = ({content}) => {
    const navigate = useNavigate()
    const [date, setDate] = useState(new Date())
    const [visible, setVisible] = useState(false)
    const [toOrder, setToOrder] =
        useState({
            date: date,
            tourist: [
                {
                    type: "adults",
                    counter: 0,
                    description: "От 18 лет"
                },
                {
                    type: "children",
                    counter: 0,
                    description: "С 6 до 17 лет"
                },
                {
                    type: "infant",
                    counter: 0,
                    description: "От 0 до 5 лет"
                }
            ],
        })

    const handleSetVisible = () => {
        setVisible(!visible)
    }

    const handleIncrement = (value, name) => {
        const copy = toOrder.tourist.map((el) => {
            if (el.type === name) {
                return {
                    ...el,
                    counter: ++value
                }
            }
            return el
        })
        setToOrder({...toOrder, tourist: copy})
    }

    const handleDecrement = (value, name) => {
        const copy = toOrder.tourist.map((el) => {
            if (el.type === name && el.counter > 0) {
                return {
                    ...el,
                    counter: --value
                }
            }
            return el
        })
        setToOrder({...toOrder, tourist: copy})
    }

    const handleSubmit = (data) => {
        let arr = data.tourist.filter(number => number.counter > 0)
        if (arr.length !== 0) {
            return navigate('/ordering', {state: {...data, date: normalizeDate(date), content}})
        }
        return alert("Количество куристов равно 0!")
    }

    const normalizeDate = date => {
        let day = date.getDate()
        let month = date.getMonth() + 1
        const year = date.getFullYear()

        if (day < 10) day = '0' + day
        if (month < 10) month = '0' + month

        return `${day}/${month}/${year}`
    }

    useEffect(() => {
        setToOrder({...toOrder, date: date})
    }, [date])

    return (
        <div className="book-now-container">
            <div className="book-now">
                <div className="book-now__content">
                    <div className="book-now__heading">
                        <h1 className="book-now__head">
                            <span>От</span>
                            {content.price} ₽
                        </h1>
                    </div>
                    <div className="book-now__date book-now__section">
                        <div className="book-now__block" onClick={handleSetVisible}>
                            <div className="book-now__text">
                                <h3 className="book-now__title">
                                    Дата
                                </h3>
                                <span className="book-now__subtitle">
                                {normalizeDate(date)}
                            </span>
                            </div>
                        </div>
                        <div className={`book-now__hidden ${visible ? "active" : ""}`}>
                            <Calendar
                                onChange={setDate}
                                value={date}
                                minDate={new Date()}
                                next2Label={null}
                                prev2Label={null}
                                showNeighboringMonth={false}
                                onClickDay={() => {
                                    setVisible(false)
                                }}
                            />
                        </div>
                    </div>
                    {toOrder.tourist.map(tourist => {
                        return <div key={tourist.type} className={`book-now__${tourist.type} book-now__section`}>
                            <div className="book-now__block">
                                <h3 className="book-now__title">
                                    {
                                        tourist.type === "adults" ?
                                            "Взрослые"
                                            : (tourist.type === "children") ?
                                                "Дети"
                                            : "Младенцы"
                                    }
                                </h3>
                                <span className="book-now__subtitle">
                                 {tourist.description}
                                </span>
                            </div>
                            <div className="book-now__count book-count">
                                <span className="book-count__decrement"
                                      onClick={() => handleDecrement(tourist.counter, tourist.type)}
                                >-</span>
                                <input name={tourist.type} className="book-count__counter" readOnly={true}
                                       value={tourist.counter}/>
                                <span className="book-count__increment"
                                      onClick={() => handleIncrement(tourist.counter, tourist.type)}
                                >+</span>
                            </div>
                        </div>
                    })}
                </div>
                <div className="book-now__submit">
                    <button className="book-now__btn"
                            onClick={() => {
                                handleSubmit(toOrder)
                            }
                            }>
                        Заказать сейчас
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookNow