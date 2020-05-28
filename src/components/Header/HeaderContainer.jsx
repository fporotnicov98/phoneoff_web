// import React from 'react'
import { connect } from 'react-redux'
import { setSearchQuery } from "../../redux/filterReducer";
import { addToCart } from '../../redux/cartReducer'
import { logout } from '../../redux/authReducer'
import Header from './Header';


const mapStateToProps = (state) => {
    return {
        searchQuery: state.filter.searchQuery,
        count: state.cart.items.length,
        isAuth: state.auth.isAuth,
    }
}


export default connect(mapStateToProps, { setSearchQuery, addToCart, logout })(Header);