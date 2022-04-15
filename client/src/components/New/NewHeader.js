import {Link} from "react-router-dom"
import "../../style/New/NewHeader.scss"

const NewHeader = () => {

    return(
        <section className="ordering-header">
            <div className="ordering-header__contacts">
                <a href="#">+7 912 435 54 32</a>
                <a href="#">hi@mail.ru</a>
            </div>
            <Link to="/" className="ordering-header__title">
                <h1>TRIP Бронирование</h1>
            </Link>
            <div className="ordering-header__social">
                <a href="#">+7 912 435 54 32</a>
                <a href="#">Выйти</a>
            </div>
        </section>
    )

}
export default NewHeader