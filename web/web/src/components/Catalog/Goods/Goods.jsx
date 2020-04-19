import React from 'react'
import style from './Goods.module.scss'
import iphone from './../../image/iphone.png'
import { NavLink } from 'react-router-dom'


const Goods = (props) => {
    debugger
    return (
        <div className={style.product}>
            <div className={style.product__row}>
                {
                    props.goods.map(prod => <div key={prod.id}>
                        <div className={style.body}>
                            <NavLink to='/product'>
                                <div className={style.block}>
                                    <div className={style.title}>{prod.title}</div>
                                    <div className={style.image}>
                                        <img src={prod.character.goodsPhoto != null ? prod.character.goodsPhoto : iphone }></img>
                                    </div>
                                    <div className={style.desc}>
                                        <div className={style.price}>{prod.price}</div>
                                        <div className={style.basket}>
                                            <a href="#s"><i className="fas fa-shopping-cart basket-ico"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Goods;



