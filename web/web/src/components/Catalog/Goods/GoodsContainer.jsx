import Goods from './Goods'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return {
        goods: state.catalogPage.goods
    }
}
const mapDispatchToProps = (dispatch) => {
    return
}

const GoodsContainer = connect(mapStateToProps,mapDispatchToProps)(Goods)

export default GoodsContainer;