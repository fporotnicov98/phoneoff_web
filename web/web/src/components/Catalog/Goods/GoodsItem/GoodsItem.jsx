import React from 'react'
import './GoodsItem.scss'
import tel from './../../../image/1.png'
import { NavLink } from 'react-router-dom'

const GoodsItem = () => {
    return (
        <div className="product__body">
            <NavLink to='/product'>
                <div className="product__block">
                    <div className="product__title">Apple iPhone XS Max</div>
                    <div className="product__image">
                        <img src={tel} alt=""></img>
                    </div>
                    <div className="product__desc">
                        <div className="product__price">67 990р</div>
                        <div className="product__basket">
                            <a href="#"><i class="fas fa-shopping-cart basket-ico"></i></a>
                        </div>
                    </div>
                </div>
            </NavLink>

        </div>
    )
}

export default GoodsItem;
