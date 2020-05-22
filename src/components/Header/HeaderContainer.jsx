import {connect} from 'react-redux'
import { setSearchQuery } from "../../redux/filterReducer";
import {addToCart} from '../../redux/cartReducer'
import Header from './Header';


const mapStateToProps = state => {
    return {
        searchQuery: state.filter.searchQuery,
        addedCount: state.cart.items.reduce((count, phone,item) => count + (phone.id ===  item.id  ? 1 : 0), 0),
    }  
}


export default connect(mapStateToProps,{setSearchQuery, addToCart})(Header);