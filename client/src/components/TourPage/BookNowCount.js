import {useState} from "react";

const BookNowCount = () => {
    let [counter, setCounter] = useState(0)

    const handleDecrement = () => {
        if (counter !== 0) {
            setCounter(--counter)
        }
    }
    const handleIncrement = () => {
        setCounter(++counter)
    }
    return(
        <div className="book-now__count book-count">
            <span className="book-count__decrement" onClick={handleDecrement}>-</span>
            <p className="book-count__counter">{counter}</p>
            <span className="book-count__increment" onClick={handleIncrement}>+</span>
        </div>
    )
}

export default BookNowCount