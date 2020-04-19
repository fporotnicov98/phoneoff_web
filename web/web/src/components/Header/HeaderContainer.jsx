import Header from './Header'
import {connect} from 'react-redux'
import {findNewTitleAC} from "./../../redux/goodsReducer"



const mapStateToProps = (state) => {
    debugger

    return {
        filterGoods: state.catalogPage.filterGoods,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        findNewTitle: (title) => {
            dispatch(findNewTitleAC(title))
        }
    }
}

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header)


export default HeaderContainer;