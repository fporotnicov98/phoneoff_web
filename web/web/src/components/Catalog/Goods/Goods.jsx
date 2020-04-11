import React from 'react'
import style from'./Goods.module.scss'
import GoodsItem from './GoodsItem/GoodsItem'


const Goods = () => {
    return (
        <div className={style.product}>
            <div className={style.product__row}>
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



