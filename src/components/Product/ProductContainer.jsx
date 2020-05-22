import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import {getProduct} from '../../redux/productReducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import {addToCart} from '../../redux/cartReducer'
import {addToCompare} from '../../redux/compareReducer'


class ProductContainer extends React.Component{

    componentWillMount(){
        debugger
        let productId = this.props.match.params.productId
        if (!productId) {
            alert("404")
        }
        this.props.getProduct(productId)
    }
    
    render(){
        return <Product {...this.props} />


    }
}

const mapStateToProps = (state) => {
    return {
        phones: state.catalogPage.phones,
        product:state.productPage.product,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps,{getProduct,addToCart,addToCompare})
)(ProductContainer)