import React from 'react';
import style from './SortFilter.module.scss'

class SortFilter extends React.Component {
    state = {
        isActive: 'all'
    }

    render() {
        return (
            <div className={style['buttons']}>
                <button className={this.state.isActive === "all" ? style['active_btn'] : style['btn']}
                    active={this.props.filterBy === 'all'}
                    onClick={()=> {
                        this.props.setFilter('all')
                        this.setState({ isActive: 'all' })
                    }}>
                    Все товары
            </button>
                <button className={this.state.isActive === "price_high" ? style['active_btn'] : style['btn']}
                    active={this.props.filterBy === 'price_high'}
                    onClick={() => {
                        this.props.setFilter('price_high')
                        this.setState({ isActive: 'price_high'})

                        }}>
                    Цена (дорогие)
            </button>
                <button className={this.state.isActive === "price_low" ? style['active_btn'] : style['btn']}
                    active={this.props.filterBy === 'price_low'}
                    onClick={() => {
                        this.props.setFilter('price_low')
                        this.setState({ isActive: 'price_low' })
                    }}>
                    Цена (дешевые)
            </button>
            </div>
        )
    }
}

export default SortFilter;
