import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {parsePhoneNumberFromString} from "libphonenumber-js"
import {useLocation} from "react-router-dom"
import "../style/OrderingPage/OrderingPage.scss"
import BreadCrumb from "../components/common/BreadCrumb";
import NewHeader from "../components/New/NewHeader";
import {useCallback, useContext, useState} from "react";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";

const schema = yup.object().shape({
    firstName: yup.string()
        .matches(/^([^0-9]*)$/, "Имя не должно содержать числа")
        .required("Имя обязательно к заполнению"), lastName: yup.string()
        .matches(/^([^0-9]*)$/, "Фамилия не должно содержать числа")
        .required("Фамилия обязательно к заполнению"), email: yup.string()
        .email("Некоректный формат email")
        .required("Email обязателен к заполнению"),
})

const OrderingPage = () => {
    const location = useLocation()
    const locationTour = location.state.content
    const {userId} = useContext(AuthContext)
    const {register, handleSubmit, formState: {errors}} = useForm({
        mode: "onBlur", resolver: yupResolver(schema)
    })
    const [orderLast, setOrderLast] = useState({})

    const createOrder = useCallback(async (data) => {
        try {
            await axios.post('/api/order/',
                {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    tel: data.tel,
                    email: data.email,
                    owner: userId,
                    orderTour: {
                        people: location.state.tourist.filter(tourist => tourist.counter > 0),
                        price: getTotalPrice(getFullPrice(), 0.1, getDiscount()),
                        tour: locationTour._id
                    }
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then((response) => console.log("12",response))
        } catch (e) {
            console.log(e)
        }
    }, [])

    const normalizePhoneNumber = value => {
        const phoneNumber = parsePhoneNumberFromString(value)
        if (!phoneNumber) {
            return value
        }

        return (phoneNumber.formatInternational())
    }

    const onSubmit = (data) => {
        setOrderLast(
            {
                ...data,
                order: {
                    people: {...location.state.tourist},
                    price: getTotalPrice(getFullPrice(), 0.1, getDiscount()),
                    tour: locationTour._id
                }
            })
        console.log("data: ", data)
        createOrder(data)
    }

    // get function

    const getPrice = (type) => {
        let price = 0
        location.state.tourist.map(item => {
            if (item.type === type && type === "adults") {
                price = locationTour.price
            } else if (item.type === type && type === "children") {
                price = locationTour.price * 0.66
            } else if (item.type === type && type === "infant") {
                price = locationTour.price * 0.5
            }
        })
        return price
    }

    const getFullPrice = () => {
        let mainPrice = 0
        location.state.tourist.map(item => {
            mainPrice += locationTour.price * item.counter
        })
        return mainPrice
    }

    const getDiscount = () => {
        let discount = 0
        location.state.tourist.map(item => {
            if (item.type === "adults") {
                discount += getPrice("adults") * item.counter
            } else if (item.type === "children") {
                discount += getPrice("children") * item.counter
            } else if (item.type === "infant") {
                discount += getPrice("infant") * item.counter
            }
        })

        discount = getFullPrice() - discount
        return discount
    }

    const getTotalPrice = (price, percent, discount) => {
        const dec = price - discount
        return dec + dec * percent
    }

    return (
        <main className="ordering-main">
            <NewHeader/>
            <BreadCrumb/>
            <section className="ordering-main__container ordering">
                <div className="ordering__booking booking">
                    <h1 className="booking__title">
                        Бронирование
                    </h1>

                    <form className="booking__form" onSubmit={handleSubmit(onSubmit)}>
                        <label className="booking__label">
                            <span className="booking__label-text">
                            Имя:
                        </span>
                            <input
                                className={`booking__input ${errors?.firstName ? "booking__input-error" : ""} `}
                                {...register("firstName")}
                            />
                            <span className="booking__error">
                                    {errors?.firstName?.message}
                                </span>
                        </label>
                        <label className="booking__label">
                                <span className="booking__label-text">
                            Фамилия:
                        </span>
                            <input
                                className={`booking__input ${errors?.firstName ? "booking__input-error" : ""} `}
                                {...register("lastName")}
                            />
                            <span className="booking__error">
                                    {errors?.lastName?.message}
                                </span>
                        </label>
                        <label className="booking__label">
                                <span className="booking__label-text">
                                    Телефон:
                                </span>
                            <input
                                className={`booking__input ${errors?.firstName ? "booking__input-error" : ""} `}
                                {...register("tel")}
                                defaultValue="+7"
                                onChange={event => {
                                    event.target.value = normalizePhoneNumber(event.target.value)
                                }}
                            />
                            <span className="booking__error">
                                    {errors?.tel?.message}
                                </span>
                        </label>
                        <label className="booking__label">
                                <span className="booking__label-text">
                                    Почта:
                                </span>
                            <input
                                className={`booking__input ${errors?.firstName ? "booking__input-error" : ""} `}
                                {...register("email")}
                            />
                            <span className="booking__error">
                                    {errors?.email?.message}
                                </span>
                        </label>

                        <button className="booking__btn btn orange-btn">
                            Забронировать
                        </button>
                    </form>
                </div>
                <div className="ordering__your-booking your-booking">
                    <h1 className="your-booking__title">
                        Ваше бронирование
                    </h1>
                    <div className="your-booking__body">
                        <div className="your-booking__body-head body-head">
                            <div className="body-head__block">
                                <h3 className="body-head__title">
                                    {locationTour.name}
                                </h3>
                                <span className="body-head__subtitle">
                                    {locationTour.region}, {locationTour.country}
                                    </span>
                            </div>
                            <img src={locationTour.src} alt=""/>
                        </div>
                        <div className="your-booking__body-content body-content">
                            <div className="body-content__block">
                                <div className="body-content__type">
                                        <span className="body-content__text">
                                            Тип тура
                                        </span>
                                    <span className="body-content__gray"> {locationTour.type}</span>
                                </div>
                                <div className="body-content__date">
                                        <span className="body-content__text">
                                            Дата
                                        </span>
                                    <span className="body-content__gray">{location.state.date.toString()}</span>
                                </div>
                                <div className="body-content__duration">
                                        <span className="body-content__text">
                                            Продолжительность
                                        </span>
                                    <span className="body-content__gray">{locationTour.days}</span>
                                </div>
                            </div>
                            <div className="body-content__tourists">
                                {location.state.tourist.map(item => {
                                    if (item.type === "adults") {
                                        return (
                                            <div key={item.type} className="body-content__tourist">
                                                <span>Количество взрослых</span>
                                                <span>{item.counter}</span>
                                            </div>
                                        )
                                    } else if (item.type === "children") {
                                        return (
                                            <div key={item.type} className="body-content__tourist">
                                                <span>Количество детей</span>
                                                <span>{item.counter}</span>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <div key={item.type} className="body-content__tourist">
                                                <span>Количество младенцев</span>
                                                <span>{item.counter}</span>
                                            </div>
                                        )
                                    }
                                })}


                            </div>
                        </div>
                        <div className="your-booking__body-price body-price">
                            <div className="body-price__price">
                                <h4 className="body-price__title">Цена для взрослых</h4>
                                <span className="body-price__text">{getPrice("adults")} ₽</span>
                            </div>
                            <div className="body-price__price">
                                <h4 className="body-price__title">Цена для детей</h4>
                                <span className="body-price__text">{getPrice("children")} ₽</span>
                            </div>
                            <div className="body-price__price">
                                <h4 className="body-price__title">Цена для младенцев</h4>
                                <span className="body-price__text">{getPrice("infant")} ₽</span>
                            </div>
                            <div className="body-price__price">
                                <h4 className="body-price__title">Промежуточный итог</h4>
                                <span className="body-price__text">
                                    {
                                        getFullPrice()
                                    } ₽
                                </span>
                            </div>
                            <div className="body-price__price">
                                <h4 className="body-price__title">Массовая скидка</h4>
                                <span className="body-price__text">{getDiscount()} ₽</span>
                            </div>
                            <div className="body-price__price">
                                <h4 className="body-price__title">Налог</h4>
                                <span className="body-price__text">10%</span>
                            </div>
                            <div className="body-price__price body-price__price_total">
                                <h4 className="body-price__title">Сумма оплаты</h4>
                                <span className="body-price__text">{
                                    getTotalPrice(
                                        getFullPrice(),
                                        0.1,
                                        getDiscount()
                                    )
                                } ₽</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default OrderingPage