import React from 'react'
import Goods from './Goods'
import {connect} from 'react-redux'
import {getPhones} from '../../../redux/goodsReducer'
import { searchPhones } from '../SortFilterContainer/SortFilterContainer'


class GoodsContainer extends React.Component{

    componentDidMount() {
        this.props.getPhones()
    }

    render(){
        return(
            <>
                <Goods {...this.props}
                phones = {this.props.phones}
                />
            </>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        phones: state.catalogPage.phones && searchPhones(state.catalogPage.phones,state.filter.filterBy,state.filter.searchQuery)
    }
}

export default connect(mapStateToProps,{getPhones})(GoodsContainer)