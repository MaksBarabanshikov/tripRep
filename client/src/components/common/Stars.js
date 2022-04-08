import classNames from "classnames";
import {useState} from "react";

export const Stars = (props) => {
    const [stars, setStars] = useState(null)

    const rank = [5, 4, 3, 2, 1];


    const removeActive = name => {
        const listItem = name.parentElement.childNodes
        console.log(listItem)

        listItem.forEach(item => {
            if (item.className === "active") {
                item.classList.remove("active")
            }
        })

    }

    const setActive = event => {
        removeActive(event.currentTarget)
        let cur = event.currentTarget.classList
        cur.add("active");
    }


    return (
        <ul className={classNames("tour-card__list row", props.stars)}>
            {rank.map(star => {
                return <li
                    key={star.toString()}
                    onClick={ event => {
                        setStars(star)
                        setActive(event)
                    }
                    }/>
            })}
        </ul>
    );
}