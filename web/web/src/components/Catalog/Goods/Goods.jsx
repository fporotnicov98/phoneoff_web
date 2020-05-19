import React from 'react'
import style from './Goods.module.scss'
import { NavLink } from 'react-router-dom'


const Goods = (props) => {
    debugger
    return (
        <div className={style.product}>
            <div className={style.product__row}>
                {
                    props.phones.map(prod => <div key={prod.Id}>
                        <div className={style.body}>
                            <NavLink to='/product'>
                                <div className={style.block}>
                                    <div className={style.title}>{prod.Name}</div>
                                    <div className={style.image}>
                                        <img src={`data:image/png;base64,${prod.Image}`}></img>
                                    </div>
                                    <div className={style.desc}>
                                        <div className={style.price}>{prod.Cost} руб</div>
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



