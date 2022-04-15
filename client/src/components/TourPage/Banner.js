import "../../style/TourPage/Banner.scss"

const Banner = ({src}) => {
    return(
        <section className="tour-banner">
            <div className="tour-banner__image" style={{backgroundImage: `url("${src}")`}}/>
        </section>

    )
}

export default Banner