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
                        <h2 className="about__title">ABOUT TRIP</h2>
                    </div>
                    <p className="about__lead">
                        Moodwill is a free web app made by a nature lover. It provides high quality sounds of the nature
                        online without requiring any download. Moreover, you can listen to any music you'd love to hear on
                        top of the nature sounds for a better experience.
                    </p>
                    <p className="about__sub-lead">
                        Created by a young insomniac named Fath, Moodwill also known as Pluvioniverse, started as a project
                        in 2011 and was originally under the name MyRainy Piano. As any insomniac knows, sleeplessness can
                        affect your health in many ways: less concentration, memory issues, fatigue... and doctors
                        suggestions aren't always that perfect, that's why this young insomniac decided to create a simple
                        but effective solution to the problem.
                    </p>
                </div>
            </div>
            <div className="about__why-trip site-section">
                <div className="about__head-title">
                    <div className="about__heading">
                        <h2 className="about__title">WHY TRIP?</h2>
                    </div>
                    <p className="about__sub-lead">
                        Moodwill is the best and only web app where you can listen and feel the power of nature with music
                        for free and without any ads or distracting content.
                    </p>
                </div>
                <div className="about__row row">
                    <ImageCard image={bg1} title="Free" subtitle="It's free and always will be" />
                    <ImageCard image={bg2} title="Higher quality audio" subtitle="Hear the difference yourself" />
                    <ImageCard image={bg3} title="No distractions" subtitle="No ads or distracting content" />
                    <ImageCard image={bg4} title="Music feature" subtitle="Play music with nature sounds" />
                </div>
            </div>
        </section>
    )
}