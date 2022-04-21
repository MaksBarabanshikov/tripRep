import {Link} from "react-router-dom";
import BreadCrumb from "../components/common/BreadCrumb";
import "../style/MyCabinet/MyCabinet.scss"

const tabs = [
    {id: "personal", title: "Личные данные", className: "tabs__info", path: "/my/personal"},
    {id: "history", title: "Бронирование", className: "tabs__history", path: "/my/order"},
    {id: "exit", title: "Выход", className: "tabs__info", path: "/my/exit"},
    {id: 3, title: "Скоро", className: "tabs__soon", path: "/my/soon"},
    {id: 4, title: "Скоро", className: "tabs__soon", path: "/my/soon"},
    {id: 5, title: "Скоро", className: "tabs__soon", path: "/my/soon"},
]

const MyCabinet = () => {

    return (
        <section className="cabinet">
            <div className="cabinet__header">
                <h4>Личный кабинет</h4>
                <BreadCrumb location=" / Личный кабинет"/>
            </div>
            <div className="cabinet__container">
                <main className="cabinet__content">
                    <div className="cabinet__tabs tabs">
                        {tabs.map(tab => {
                            return (
                                <Link to={tab.path} key={tab.id} className={`tabs__tab ${tab.className}`}>
                                    <h4>{tab.title}</h4>
                                </Link>
                            )
                        })
                        }
                    </div>
                </main>
            </div>
        </section>
    )
}

export default MyCabinet