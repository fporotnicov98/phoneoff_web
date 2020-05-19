import React from 'react'
import Product from './Product'
import { connect } from 'react-redux'
import {getProduct} from '../../redux/productReducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'



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
        product:state.productPage.product,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps,{getProduct})
)(ProductContainer)