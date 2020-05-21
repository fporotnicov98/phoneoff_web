import React from 'react'
import style from './Basket.module.scss'
import { NavLink } from 'react-router-dom'


const Basket = (props) => {
    return (
        <div className={style.basket__row}>
            <div className={style.title}>
                <p>Оформление заказа</p>
                <NavLink to="/">Вернуться к покупкам</NavLink>
            </div>
            {
                props.uniqItems.map(prod => <div key={prod.Id}>
                    <div className={style.body}>
                        <div className={style.goods}>
                            <div className={style.photo}>
                                <NavLink to={'/product/' + prod.Id}><img src={`data:image/png;base64,${prod.Image}`} alt="" /></NavLink>
                            </div>
                            <div className={style.nameGoods}><label for="option1">Мобильный телефон {prod.Name}</label></div>
                            <div className={style.amount}>
                                <div className={style.plus}><i class="fas fa-plus"></i></div>
                                <div className={style.count}>{props.addedCount}</div>
                                <div className={style.minus}><i class="fas fa-minus"></i></div>
                            </div>
                            <div className={style.price}>{prod.Cost} р</div>
                            <div className={style.delete}><button onClick = {() => props.removeFromCart(prod.Id)} class="fas fa-trash"></button></div>
                        </div>
                    </div>
                </div>)
            }
            <div className={style.checkout}>
                <div className={style.summary}>Итого {props.count} товаров на сумму: {props.totalPrice} р</div>
                <NavLink to='/basket' className={style.btn__check}>Оформить заказ</NavLink>
            </div>
        </div>
    )
}
export default Basket;