import { connect } from 'react-redux';
import {removeFromCart,addToCart,removeProdFromCart} from '../../redux/cartReducer'
import Basket from './Basket'
import uniqBy from 'lodash/uniqBy'

const mapStateToProps = ({ cart }) => ({
    totalPrice: cart.items.reduce((total, phone) => total + phone.Cost, 0),
    count: cart.items.length,
    items:cart.items,
    uniqItems: uniqBy(cart.items, o => o.Id),
  });

export default connect(mapStateToProps,{removeFromCart,addToCart,removeProdFromCart})(Basket)