import {connect} from 'react-redux'
import { setSearchQuery } from "../../redux/filterReducer";
import Header from './Header';


const mapStateToProps = state => {
    return {
        searchQuery: state.filter.searchQuery
    }  
}


export default connect(mapStateToProps,{setSearchQuery})(Header);