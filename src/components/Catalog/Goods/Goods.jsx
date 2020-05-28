import React from 'react'
import style from './Goods.module.scss'
import { NavLink } from 'react-router-dom'


const Goods = (props) => {
    return (
        <div className={style.product}>
            <div className={style.product__row}>
                {
                    props.filterPhones.map(phone =>
                        <div className={style.body}>
                            <div className={style.block}>
                                <div className={style.title}>{phone.Name}</div>
                                <div className={style.image}>
                                    <NavLink to={'/product/' + phone.Id}>
                                        <img src={`data:image/png;base64,${phone.Image}`} alt=''></img>
                                    </NavLink>
                                </div>
                                <div className={style.desc}>
                                    <div className={style.price}>{phone.Cost} руб</div>
                                    <div className={style.basket}>
                                        {
                                            props.cart.some(item => item.Id === phone.Id)
                                                ? <div className={style['check']}><i class="fas fa-check"></i></div>
                                                : <button onClick={() => props.addToCart(phone)}><i className="fas fa-shopping-cart basket-ico"></i></button>
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    )}
            </div>
        </div>

    )
}

export default Goods;



