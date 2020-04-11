import React from 'react'
import style from './Catalog.module.scss'
import Filter from './Filter/Filter'
import Goods from './Goods/Goods'

const Catalog = () => {
    return (
        <div className={style.catalog__row}>
            <div className={style.catalog__minBlock}>
                <Filter />
            </div>
            <div className={style.catalog__maxBlock}>
                <Goods />
            </div>
        </div>
    )
}

export default Catalog;