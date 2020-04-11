import React from 'react'
import style from './GoodsItem.module.scss'
import tel from './../../../image/1.png'
import { NavLink } from 'react-router-dom'

const GoodsItem = () => {
    return (
        <div className={style.body}>
            <NavLink to='/product'>
                <div className={style.block}>
                    <div className={style.title}>Apple iPhone XS Max</div>
                    <div className={style.image}>
                        <img src={tel} alt=""></img>
                    </div>
                    <div className={style.desc}>
                        <div className={style.price}>67 990р</div>
                        <div className={style.basket}>
                            <a href="#s"><i className="fas fa-shopping-cart basket-ico"></i></a>
                        </div>
                    </div>
                </div>
            </NavLink>

        </div>
    )
}

export default GoodsItem;
