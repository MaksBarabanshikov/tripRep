import "../style/MainFooter.scss"

export const MainFooter = () => {
    return (
        <section className="footer">
            <div className="footer__container">
                <div className="footer__row row">
                    <div className="footer__col">
                        <div className="footer__block">
                            <div className="footer__heading heading">
                                <h2 className="footer__title">ABOUT TRIP</h2>
                            </div>
                            <p className="footer__sub-lead">TRIP is a free web app that provides high quality nature
                                sounds online to help you concentrate, relax, sleep and overall feel better.</p>
                        </div>
                        <div className="footer__block">
                            <div className="footer__heading heading">
                                <h2 className="footer__title">SHARING IS CARING</h2>
                            </div>
                            <div className="footer__row row">
                                <a className="footer__social" href="#" target="_blank">1</a>
                                <a className="footer__social" href="#" target="_blank">1</a>
                                <a className="footer__social" href="#" target="_blank">1</a>
                                <a className="footer__social" href="#" target="_blank">1</a>
                                <a className="footer__social" href="#" target="_blank">1</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__block">
                            <div className="footer__heading heading">
                                <h2 className="footer__title">EXPLORE</h2>
                            </div>
                            <div className="footer__row row">
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <p className="footer__link">Home</p>
                                    </li>
                                    <li className="footer__item">
                                        <p className="footer__link">About</p>
                                    </li>
                                    <li className="footer__item">
                                        <p className="footer__link">Our sponsors</p>
                                    </li>
                                </ul>
                                <ul className="footer__list">
                                    <li className="footer__item">
                                        <p className="footer__link">Become a sponsors</p>
                                    </li>
                                    <li className="footer__item">
                                        <p className="footer__link">Privacy Policy</p>
                                    </li>
                                    <li className="footer__item">
                                        <p className="footer__link">Contact us</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__block">
                            <div className="footer__heading heading">
                                <h2 className="footer__title">TRIP APP (SOON)</h2>
                            </div>
                            <p className="footer__sub-lead">Android</p>
                            <p className="footer__sub-lead">iOS</p>
                        </div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__heading heading">
                            <h2 className="footer__title">GET A FREE QUOTE</h2>
                        </div>
                        <p className="footer__sublead">Join more than 3,000 people on our mailing list.</p>
                        <div className="footer__input-group row">
                            <input type="email" className="footer__input form__input" placeholder="Your email"/>
                            <input type="submit" className="footer__btn btn" value="Subscribe"/>
                        </div>
                    </div>
                </div>
                <div className="footer__row row">
                    <p className="footer__text text-white">
                        © 2022 Trip | Listen and feel the power of nature.
                    </p>
                </div>
            </div>
        </section>
    )
}