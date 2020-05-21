import React from 'react';

const SortFilter = (props) => (
    <div>
        <button
            active={props.filterBy === 'all'}
            onClick={props.setFilter.bind(this, 'all')}>
            Все товары
    </button>
        <button
            active={props.filterBy === 'price_high'}
            onClick={props.setFilter.bind(this, 'price_high')}>
            Цена (дорогие)
    </button>
        <button
            active={props.filterBy === 'price_low'}
            onClick={props.setFilter.bind(this, 'price_low')}>
            Цена (дешевые)
    </button>
    </div>


);

export default SortFilter;
