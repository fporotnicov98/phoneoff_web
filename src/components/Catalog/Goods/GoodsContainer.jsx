import React from 'react'
import Goods from './Goods'
import { connect } from 'react-redux'
import { getPhones } from '../../../redux/goodsReducer'
import { addToCart } from '../../../redux/cartReducer'
import { searchPhones } from '../SortFilterContainer/SortFilterContainer'
import style from './Goods.module.scss'


class GoodsContainer extends React.Component {

    componentDidMount() {
        this.props.getPhones()
    }

    render() {
        const { phones } = this.props
        return (
            <>
                <div className={style.product}>
                    <div className={style.product__row}>
                        {phones.map((phone, i) => <Goods key={i} {...phone} addToCart={this.props.addToCart} />)}
                    </div>
                </div>

            </>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        filterPhones: state.catalogPage.phones && searchPhones(state.catalogPage.phones, state.filter.filterBy, state.filter.searchQuery),
        phones: state.catalogPage.phones
    }
}

export default connect(mapStateToProps, { getPhones, addToCart })(GoodsContainer)