import {Link, useNavigate} from "react-router-dom"
import "../../style/common/BreadCrumb.scss"

const BreadCrumb = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(-1)
    }

    return (
        <section className="breadcrumb">
            <div className="breadcrumb__container">
                <Link to="/">Главная</Link>
                <a href="#" onClick={handleNavigate}>Назад</a>
            </div>
        </section>
)
}

export default BreadCrumb