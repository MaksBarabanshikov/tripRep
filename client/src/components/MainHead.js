import {Navbar} from "./Navbar";
import { Link as ScrollItem} from "react-scroll";

export const MainHead = () => {
    return(
            <section className="header">
                <div className="header__content">
                    <Navbar/>
                    <div className="header__text">
                        <h2 className="header__title text-white">Trip делает жизнь проще и лучше!</h2>
                        <h5 className="header__subtitle bounce-1" >Туризм и путешествия</h5>
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