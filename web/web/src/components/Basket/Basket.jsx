import React from 'react'
import style from './Basket.module.scss'
import { NavLink } from 'react-router-dom'
import photo from './../image/1.png'

const Basket = () => {
    return (
        <div className={style.basket__row}>
            <div className={style.title}>
                <p>Оформление заказа</p>
                <NavLink to="/">Вернуться к покупкам</NavLink>
            </div>
            <div className={style.body}>
                <div className={style.goods}>
                    <div className={style.check}>
                        <input type="checkbox" id="option1"></input>
                    </div>
                    <div className={style.photo}>
                        <NavLink to='/product'><img src={photo} alt="" /></NavLink>
                    </div>
                    <div className={style.nameGoods}><label for="option1">Мобильный телефон Apple iPhone 11 Pro Max 512GB (серый космос)</label></div>
                    <div className={style.amount}>
                        <div className={style.plus}><i class="fas fa-plus"></i></div>
                        <div className={style.count}>1</div>
                        <div className={style.minus}><i class="fas fa-minus"></i></div>
                    </div>
                    <div className={style.price}>69 990р</div>
                    <div className={style.delete}><i class="fas fa-trash"></i></div>
                </div>
            </div>
            <div className={style.checkout}>
                <div className={style.summary}>Итого 'count' товаров на сумму:</div>
                <NavLink to='/basket' className={style.btn__check}>Оформить заказ</NavLink>
            </div>

        </div>
    )
}
export default Basket;