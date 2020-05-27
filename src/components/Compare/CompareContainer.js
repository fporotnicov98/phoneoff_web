import { connect } from 'react-redux';
import uniqBy from 'lodash/uniqBy'
import {removeFromCompare} from '../../redux/compareReducer'
import Compare from './Compare'

const mapStateToProps = state => ({
    uniqItems:  uniqBy(state.comparePage.items, o => o.Id)
  });

export default connect(mapStateToProps,{removeFromCompare})(Compare)