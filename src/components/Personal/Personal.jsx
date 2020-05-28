import React from 'react'
import style from './Personal.module.scss'
import PersonalData from './PersonalData/PersonalData';
import Order from './Order/Order';
import {getOrder} from '../../redux/authReducer'
import { connect } from 'react-redux';

class Personal extends React.Component {

    componentDidMount(){
        this.props.getOrder(this.props.auth.token)
    }

    render(){
        return (
            <div className={style.information__row}>
                <PersonalData auth = {this.props.auth}/>
                <Order orders = {this.props.auth.orders} />
            </div>
        )
    }
    
}
const mapStateToProps = state => {
    return{
        auth:state.auth
    }
}
export default connect(mapStateToProps,{getOrder})(Personal)