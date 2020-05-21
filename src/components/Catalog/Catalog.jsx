import React from 'react'
import style from './Catalog.module.scss'
import Filter from './Filter/Filter'
import GoodsContainer from './Goods/GoodsContainer'
import SortFilterContainer from './SortFilterContainer/SortFilterContainer'

const Catalog = () => {
    return (
        <div className={style.catalog__row}>
            <div className={style.catalog__minBlock}>
                <Filter />
            </div>
            <div className={style.catalog__maxBlock}>
                <SortFilterContainer />
                <GoodsContainer />
            </div>
        </div>
    )
}

export default Catalog;