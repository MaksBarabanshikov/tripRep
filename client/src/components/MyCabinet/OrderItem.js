
const OrderItem = ({item, tour, handleDelete}) => {
    return (
        <li className="cabinet__order-list-item">
            <div>
                <div className="cabinet__order-row">
                    <h4 className="cabinet__order-title">
                        Забронировано на:
                    </h4>
                    <p className="cabinet__order-text">
                        {item.firstName} {item.lastName}
                    </p>
                </div>
                <div className="cabinet__order-row">
                    <h4 className="cabinet__order-title">
                        Дата: {item.orderTour.date}
                    </h4>
                </div>
                <div className="cabinet__order-row">
                    <p className="cabinet__tel">
                        Телефон:
                    </p>
                    <p className="cabinet__order-text">
                        {item.tel}
                    </p>
                </div>
                <div className="cabinet__order-row">
                    <p className="cabinet__email">
                        Почта:
                    </p>
                    <p className="cabinet__order-text">
                        {item.email}
                    </p>
                </div>
                <div className="cabinet__order-row">
                    <div className="cabinet__tour">
                        <h3 className="cabinet__tour-people">
                            {item.orderTour.people.map(item => {
                                return (
                                    <div key={item.description}>
                                        <p>{item.description}</p>
                                        <span>{item.counter}</span>
                                    </div>
                                )
                            })}
                        </h3>
                        <h3 className="cabinet__tour-price">
                            Цена:
                            <span>{item.orderTour.price} ₽</span>
                        </h3>
                    </div>
                </div>
            </div>
            <div>
                <div className="cabinet__order-row">
                    <img src={tour.src} alt=""/>
                    <h4 className="cabinet__order-title">
                        Название тура: {tour.name}
                    </h4>
                </div>
                <div className="cabinet__order-row">
                    <h4 className="cabinet__order-title">
                        Тип тура: {tour.type}
                    </h4>
                </div>
                <div className="cabinet__order-row">
                    <button className="cabinet__order-delete" onClick={() => handleDelete(item._id)}/>
                </div>
            </div>
        </li>
    )
}

export default OrderItem