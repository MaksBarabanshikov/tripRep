import {Navbar} from "./Navbar";
import { Link as ScrollItem} from "react-scroll";

export const MainHead = () => {
    return(
            <section className="header">
                <div className="header__content">
                    <Navbar/>
                    <div className="header__text">
                        <h2 className="header__title text-white">Moodwill makes life easier, better!</h2>
                        <h5 className="header__subtitle bounce-1" >Listen and feel the power of nature. Use your headphones for a better experience.</h5>
                        <ScrollItem
                            className="header__scroll"
                            activeClass="active"
                            to="aboutDestination"
                            smooth={true}
                            duration={500}
                        />
                    </div>
                </div>
            </section>
    )
}