import React from 'react';
import style from './SortFilter.module.scss'

const SortFilter = (props) => (
    <div className={style['buttons']}>
        <button className={style['btn']}
            active={props.filterBy === 'all'}
            onClick={props.setFilter.bind(this, 'all')}>
            Все товары
        </button>
        <button className={style['btn']}
            active={props.filterBy === 'price_high'}
            onClick={props.setFilter.bind(this, 'price_high')}>
            Цена (дорогие)
        </button>
        <button className={style['btn']}
            active={props.filterBy === 'price_low'}
            onClick={props.setFilter.bind(this, 'price_low')}>
            Цена (дешевые)
        </button>
    </div>


);

export default SortFilter;
