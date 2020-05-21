import { connect } from 'react-redux'
import {setFilter} from '../../../redux/filterReducer'
import SortFilter from './SortFilter'
import orderBy from 'lodash/orderBy'



const sortBy = (phones, filterBy) => {
  switch (filterBy) {
    case 'price_high':
      return orderBy(phones, 'Cost', 'desc');
    case 'price_low':
      return orderBy(phones, 'Cost', 'asc');
    default:
      return phones;
  }
};
const searchFilter = (phones, searchQuery) =>
  phones.filter( o =>o.Name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0);

export const searchPhones = (phones, filterBy, searchQuery) => {
    return sortBy(searchFilter(phones, searchQuery), filterBy);
  };



const mapStateToProps = (state) => {
  return {
    filterBy: state.filter.filterBy
  }
}
export default connect(mapStateToProps,{setFilter})(SortFilter);
