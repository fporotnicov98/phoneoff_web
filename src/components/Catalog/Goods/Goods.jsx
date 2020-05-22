import React from 'react'
import style from './Goods.module.scss'
import { NavLink } from 'react-router-dom'


const Goods = (props) => {
    return (
                        <div className={style.body}>
                            <div className={style.block}>
                                <div className={style.title}>{props.Name}</div>
                                <NavLink to={'/product/' + props.Id}>
                                <div className={style.image}>
                                    <img src={`data:image/png;base64,${props.Image}`} alt=''></img>
                                </div>
                                </NavLink>
                                <div className={style.desc}>
                                    <div className={style.price}>{props.Cost} руб</div>
                                    <div className={style.basket}>
                                        <button onClick = {() => props.addToCart(props)}><a href="#s"><i className="fas fa-shopping-cart basket-ico"></i></a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default Goods;



