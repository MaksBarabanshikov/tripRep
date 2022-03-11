import "../../style/common/ImageCard.scss"

export const ImageCard = props => {
    return (
        <div className="image-card">
            <div className="image-card__image" style={{backgroundImage: `url( ${props.image})`}}/>
            <div className="image-card__content">
                <h2 className="image-card__title">{props.title}</h2>
                <span className="image-card__subtitle">{props.subtitle}</span>
            </div>
        </div>
    )
}