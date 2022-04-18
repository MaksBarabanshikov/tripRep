import "../style/MainAbout.scss"
import {ImageCard} from "./common/imageCard";
import bg1 from "../img/backgrounds/imageCardBg1.jpg"
import bg2 from "../img/backgrounds/imageCardBg2.jpg"
import bg3 from "../img/backgrounds/imageCardBg3.jpg"
import bg4 from "../img/backgrounds/imageCardBg4.jpg"

export const MainAbout = () => {
    return (
        <section className="about" id="aboutDestination">
            <div className="about__trip site-section row">
                <div className="about__container">
                    <div className="about__heading">
                        <h2 className="about__title">О нас</h2>
                    </div>
                    <p className="about__lead">
                        Trip — это веб-приложение, созданное любителем природы. Он обеспечивает бронирование различный
                        совеменных туров. Кроме того, вы получите скидку если возьмете с собой детей!
                    </p>
                    <p className="about__sub-lead">
                        Trip, также известный как курсовая, был создан молодым студентом по имени максим.
                        для продвижения современного туризма по России.
                    </p>
                </div>
            </div>
            <div className="about__why-trip site-section">
                <div className="about__head-title">
                    <div className="about__heading">
                        <h2 className="about__title">Почему TRIP ?</h2>
                    </div>
                    <p className="about__sub-lead">
                        Trip — лучшее и единственное веб-приложение, в котором вы можете забронировать различные туры
                        без по приемлиемым ценам.
                    </p>
                </div>
                <div className="about__row row">
                    <ImageCard image={bg1} title="Быстро" subtitle="Это быстро и всегда будет"/>
                    <ImageCard image={bg2} title="Проверенное качество" subtitle="Trip гарантирует"/>
                    <ImageCard image={bg3} title="Никаких отвлекающих факторов" subtitle="Никакой рекламы или отвлекающего контента"/>
                    <ImageCard image={bg4} title="Будущие туризма" subtitle="Современные туры"/>
                </div>
            </div>
        </section>
    )
}