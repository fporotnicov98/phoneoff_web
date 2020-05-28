import { connect } from 'react-redux';
import uniqBy from 'lodash/uniqBy'
import { removeFromCompare } from '../../redux/compareReducer'
import Compare from './Compare'

const mapStateToProps = (state) => {
  return {
    uniqItems: uniqBy(state.comparePage.items, o => o.Id),
    count: state.cart.items.length,
  }
};

export default connect(mapStateToProps, { removeFromCompare })(Compare)