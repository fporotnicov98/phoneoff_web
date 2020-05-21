import { connect } from 'react-redux';
import {removeFromCart} from '../../redux/cartReducer'
import Basket from './Basket'
import uniqBy from 'lodash/uniqBy'

const mapStateToProps = ({ cart },{ id }) => ({
    totalPrice: cart.items.reduce((total, phones) => total + phones.Cost, 0),
    addedCount: cart.items.reduce((count, phone) => count + (phone.id ===  id  ? 1 : 0), 0),
    count: cart.items.length,
    items:cart.items,
    uniqItems: uniqBy(cart.items, o => o.Id),
  });

export default connect(mapStateToProps,{removeFromCart})(Basket)