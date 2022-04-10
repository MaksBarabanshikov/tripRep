import classNames from "classnames";
import {useState} from "react";
import "../../style/common/Accordion.scss"

const Accordion = ({title, content}) => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={classNames("accordion-item", isActive ? "active" : null)} onClick={() => setIsActive(!isActive)}>
            <div className="accordion-item__title">
                <h4>
                    {title}
                </h4>
                <span className="accordion-item__control"/>
            </div>
            <div className="accordion-item__content">
                {content}
            </div>
        </div>
    )
}

export default Accordion