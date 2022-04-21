import {Link} from "react-router-dom"
import "../../style/common/BreadCrumb.scss"

const BreadCrumb = ({location}) => {

    return (
        <section className="breadcrumb">
            <div className="breadcrumb__container">
                <Link to="/">Главная</Link>
                <span className="breadcrumb__current">{location}</span>
            </div>
        </section>
)
}

export default BreadCrumb