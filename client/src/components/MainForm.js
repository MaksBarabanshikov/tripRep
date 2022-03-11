import "../style/MainForm.scss"

export const MainForm = () => {
    return (
        <section className="form site-section">
            <div className="form__head-title">
                <div className="form__heading heading">
                    <h2 className="form__title text-white text-center">
                        Get in touch with us
                    </h2>
                </div>
                <p className="form__sub-lead text-center">
                    Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </div>
            <form action="#" className="form__container">
                <input type="text" className="form__input main-input" name="form-name" placeholder="Your name"/>
                <input type="email" className="form__input main-input" name="form-name" placeholder="Your email"/>
                <input type="text" className="form__input main-input" name="form-name" placeholder="Subject"/>
                <textarea name="form-name" className="form__input form-textarea" cols="30" rows="5"
                          placeholder="Your message"/>
                <input type="submit" className="form__submit btn" value="Submit"/>
            </form>
        </section>
    )
}