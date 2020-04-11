import React from 'react'
import style from './Compare.module.scss'
import { NavLink } from 'react-router-dom';
import image from './../image/1.png'

const Compare = () => {
    return (
        <div className={style.compare__row}>
            <div className={style.title}>
                <p>Cравнение заказов</p>
                <NavLink to="/#">Вернуться к покупкам</NavLink>
            </div>
            <div className={style.body}>
                <div className={style.characteristics}>
                    <div className={style.subtitle}>Категории</div>
                    <div className={style.items}>
                        <ul>
                            <li>Наименование</li>
                            <li>Стоимость</li>
                            <li>Оперативная память</li>
                            <li>Встроенная память</li>
                            <li>Диагональ экрана</li>
                        </ul>
                    </div>
                </div>
                <div className={style.products}>
                    <div className={style.product__name}>
                        <a href="#s"><i class="fas fa-trash"></i></a>
                        <a href="#s"><img src={image} alt="" /></a>
                    </div>
                    <div className={style.product__desc}>
                        <ul>
                            <li>Samsung Galaxy S20 Ultra (серый)</li>
                            <li>99 990 руб.</li>
                            <li>128 Гб</li>
                            <li>12 Гб</li>
                            <li>6.9"</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Compare;