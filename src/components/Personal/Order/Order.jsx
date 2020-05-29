import React from 'react'
import './Order.scss'

const Order = (props) => {
    return (
        <div className="information__order">
            <div className="information__title">Мои заказы</div>
            <div className="order__row">
                <div className="order__body">
                    <form action="" className="order__form">
                        {
                            props.orders.map(order => 
                        <div className="order__info">
                            <p className="order__number">№ </p>
                            <label for="" className="order__label">{order.idOrder}</label>
                            <label for="" className="order__price">{order.summa} руб.</label>
                            <label for="" className="order__status">{order.status}</label>
                        </div>
                            )}
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Order;