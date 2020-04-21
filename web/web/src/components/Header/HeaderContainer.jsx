import Header from './Header'
import {connect} from 'react-redux'
import {updateNewTitleAC,filterNewTitleAC} from "./../../redux/goodsReducer"



const mapStateToProps = (state) => {

    return {
        filterGoods: state.catalogPage.filterGoods,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        findNewTitle: (title) => {
            dispatch(updateNewTitleAC(title))
        },
        filterNewTitle: () => {
            dispatch(filterNewTitleAC())
        }
    }
}

const HeaderContainer = connect(mapStateToProps,mapDispatchToProps)(Header)


export default HeaderContainer;