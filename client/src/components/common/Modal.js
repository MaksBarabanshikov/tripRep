import {useState} from "react"
import "../../style/common/Modal.scss"

const Modal = ({children, visibility}) => {
    const [visible, setVisible] = useState(visibility)

    const handleVisible = () => {
      setVisible(!visible)
    }

    return (
        <div className={`modal ${visible ? "visible" : ""}`} onClick={() => handleVisible()}>
            <span className="modal__close" onClick={() => handleVisible()}/>
            <span className="modal__message">{children}</span>
        </div>
    )
}

export default Modal