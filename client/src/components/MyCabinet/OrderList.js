import OrderItem from "./OrderItem";

const OrderList = ({data, handleDelete}) => {
    return(
        <ul className="cabinet__order-list">
            {
                typeof data === "string" ? <li><p>{data}</p></li>
                    : data.order.map(item => (
                    <OrderItem key={item._id} item={item} tour={data.tour} handleDelete={handleDelete}/>
                ))
            }

        </ul>
    )
}

export default OrderList