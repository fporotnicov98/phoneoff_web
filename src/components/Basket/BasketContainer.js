import { connect } from 'react-redux';
import {removeFromCart,addToCart,removeProdFromCart,addOrder} from '../../redux/cartReducer'
import Basket from './Basket'
import uniqBy from 'lodash/uniqBy'

const mapStateToProps = (state) => ({
    totalPrice: state.cart.items.reduce((total, phone) => total + phone.Cost, 0),
    count: state.cart.items.length,
    items:state.cart.items,
    email: state.auth.email,
    itemsId: state.cart.items.map(item => item.Id),
    uniqItems: uniqBy(state.cart.items, o => o.Id),
  });

export default connect(mapStateToProps,{removeFromCart,addToCart,removeProdFromCart,addOrder})(Basket)