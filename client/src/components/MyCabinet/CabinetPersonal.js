import BreadCrumb from "../common/BreadCrumb";
import {useCallback, useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";

const CabinetPersonal = () => {
    const {userId} = useContext(AuthContext)
    const [personal, setPersonal] = useState(null)

    const getPersonal = useCallback(async () => {
        try {
            await axios.get('/api/cabinet/personal', {
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {userId}
            })
                .then(response => {
                    setPersonal(response.data)
                })
        } catch (e) {
            console.log(e)
        }
    }, [userId])

    useEffect(() => {
        getPersonal()
    }, [getPersonal])

    return (
        <section className="cabinet">
            <div className="cabinet__header">
                <h4>Личный кабинет</h4>
                <BreadCrumb location=" / Личный кабинет"/>
            </div>
            <div className="cabinet__container">
                <main className="cabinet__content">
                    <h1>Персональная информация</h1>

                    {!!personal &&
                        <>
                            <h4>Почта: {personal.email}</h4>
                            <h4>Пароль: {personal.password}</h4>
                        </>
                    }
                </main>
            </div>
        </section>
    )
}
export default CabinetPersonal