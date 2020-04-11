import React from 'react'
import './Order.scss'

const Order = () => {
    return (
        <div className="information__order">
            <div className="information__title">Мои заказы</div>
            <div className="order__row">
                <div className="order__body">
                    <form action="" className="order__form">
                        <div className="order__info">
                            <p className="order__number">№1</p>
                            <label for="" className="order__label">Название товара</label>
                            <label for="" className="order__price">69990р</label>
                            <label for="" className="order__status">Статус заказа</label>
                        </div>
                        <div className="order__info">
                            <p className="order__number">№2</p>
                            <label for="" className="order__label">Название товара</label>
                            <label for="" className="order__price">69990р</label>
                            <label for="" className="order__status">Статус заказа</label>
                        </div>
                        <div className="order__info">
                            <p className="order__number">№3</p>
                            <label for="" className="order__label">Название товара</label>
                            <label for="" className="order__price">69990р</label>
                            <label for="" className="order__status">Статус заказа</label>
                        </div>
                        <div className="order__info">
                            <p className="order__number">№4</p>
                            <label for="" className="order__label">Название товара</label>
                            <label for="" className="order__price">69990р</label>
                            <label for="" className="order__status">Статус заказа</label>
                        </div>
                        <div className="order__info">
                            <p className="order__number">№5</p>
                            <label for="" className="order__label">Название товара</label>
                            <label for="" className="order__price">69990р</label>
                            <label for="" className="order__status">Статус заказа</label>
                        </div>
                        <div className="order__info">
                            <p className="order__number">№6</p>
                            <label for="" className="order__label">Название товара</label>
                            <label for="" className="order__price">69990р</label>
                            <label for="" className="order__status">Статус заказа</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Order;