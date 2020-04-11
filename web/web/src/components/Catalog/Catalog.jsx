import React from 'react'
import './Catalog.scss'
import Filter from './Filter/Filter'
import Goods from './Goods/Goods'

const Catalog = () => {
    return (
        <main className="catalog">
            <div className="container">
                <div className="catalog__row">
                    <div className="catalog__min-block">
                        <Filter />
                    </div>
                    <div className="catalog__max-block">
                        <Goods />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Catalog;