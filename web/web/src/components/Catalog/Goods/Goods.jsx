import React from 'react'
import './Goods.scss'
import GoodsItem from './GoodsItem/GoodsItem'


const Goods = () => {
    return (
        <div className="product">
            <div className="product__row">
                <GoodsItem />
                <GoodsItem />
                <GoodsItem />
                <GoodsItem />
                <GoodsItem />
                <GoodsItem />
                <GoodsItem />
                <GoodsItem />
                <GoodsItem />
            </div>
        </div>
    )
}

export default Goods;



