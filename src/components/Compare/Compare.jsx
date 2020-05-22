import React from 'react'
import style from './Compare.module.scss'
import { NavLink } from 'react-router-dom';

const Compare = (props) => {
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
                {
                    props.uniqItems.map(prod => <div key={prod.Id}>
                        <div className={style.products}>
                            <div className={style.product__name}>
                                <i onClick = {() => props.removeFromCompare(prod.Id)}><i class="fas fa-trash"></i></i>
                                <NavLink to={'/product/' + prod.Id}><img src={`data:image/png;base64,${prod.Image}`} alt="" /></NavLink>
                            </div>
                            <div className={style.product__desc}>
                                <ul>
                                    <li>{prod.Name}</li>
                                    <li>{prod.Cost} руб.</li>
                                    <li>{prod.RAM} Гб</li>
                                    <li>{prod.ROM} Гб</li>
                                    <li>{prod.Diagonal}"</li>
                                </ul>
                            </div>
                        </div>
                    </div>)
                }
            </div>


        </div>
    )
}

export default Compare;