import BreadCrumb from "../common/BreadCrumb";
import {useCallback, useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import OrderList from "./OrderList";

const CabinetOrder = () => {
    const {userId} = useContext(AuthContext)
    const [orderData, setOrderData] = useState(null)

    const getOrder = useCallback(async () => {
            try {
                await axios.get('/api/cabinet', {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    params: {userId}
                })
                    .then(response => {
                        setOrderData(response.data)
                    })
            } catch (e) {
                setOrderData(e.response.data.message)
            }
        },[userId])

    const handleDelete = useCallback(async (id) => {
        console.log(id)
            try {
                await axios.delete(`/api/cabinet/delete/${id}`, {id}, {
                    headers: {'Content-Type': 'application/json'}
                })
                    .then(() => getOrder())
            } catch (e) {
                console.log(e)
                throw e
            }
        }, [getOrder]
    )


    useEffect(() => {
        getOrder()
    }, [getOrder])

    return (
        <section className="cabinet">
            <div className="cabinet__header">
                <h4>Личный кабинет</h4>
                <BreadCrumb location=" / Личный кабинет"/>
            </div>
            <div className="cabinet__container">
                <main className="cabinet__content">
                    <h2 className="cabinet__title">
                        Ваше бронирование
                    </h2>
                    <div className="cabinet__orders">
                        <ul className="cabinet__order-list">
                            {!!orderData && <OrderList data={orderData} handleDelete={handleDelete}/>}
                        </ul>
                    </div>
                </main>
            </div>
        </section>
    )
}

export default CabinetOrder