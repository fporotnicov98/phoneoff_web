import React from 'react'
import { connect } from 'react-redux'
import getProduct from '../../redux/productReducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'



export class ProductContainer extends React.Component{

    componentDidMount(){
        debugger
        let productId = this.props.match
        if (!productId) {
            alert("404")
        }
        this.props.getProduct(productId)
    }

    render(){
        return(
            <div></div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product:state.productPage.product
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps,{getProduct})
)(ProductContainer)