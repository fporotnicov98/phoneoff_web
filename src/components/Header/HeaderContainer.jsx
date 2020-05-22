import {connect} from 'react-redux'
import { setSearchQuery } from "../../redux/filterReducer";
import {addToCart} from '../../redux/cartReducer'
import Header from './Header';


const mapStateToProps = (state) => {
    return {
        searchQuery: state.filter.searchQuery,
        count: state.cart.items.length,
    }  
}


export default connect(mapStateToProps,{setSearchQuery, addToCart})(Header);