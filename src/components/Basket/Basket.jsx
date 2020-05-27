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
                props.uniqItems.map(item => <div key={item.Id}>
                    <div className={style.body}>
                        <div className={style.goods}>
                            <div className={style.photo}>
                                <NavLink to={'/product/' + item.Id}><img src={`data:image/png;base64,${item.Image}`} alt="" /></NavLink>
                            </div>
                            <div className={style.nameGoods}>Мобильный телефон {item.Name}</div>
                            <div className={style.amount}>
                                <button className={style.plus} onClick = {() => props.addToCart(item)}><i class="fas fa-plus"></i></button>
                                <div className={style.count}><span>{props.items.reduce((count, phone) => count + (phone.Id ===  item.Id  ? 1 : 0), 0)}</span></div>
                                <button className={style.minus}  onClick = {() => props.removeProdFromCart(item.Id)}><i class="fas fa-minus"></i></button>
                            </div>
                            <div className={style.price}>{item.Cost} р</div>
                            <div className={style.delete}><button onClick = {() => props.removeFromCart(item.Id)} class="fas fa-trash"></button></div>
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