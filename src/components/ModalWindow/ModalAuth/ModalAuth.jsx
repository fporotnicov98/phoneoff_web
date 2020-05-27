import React from 'react'
import style from './ModalAuth.module.scss'
import $ from 'jquery'
import { findDOMNode } from 'react-dom';
import {setRegistration,setLogin,getAuth} from '../../../redux/authReducer'
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";



class ModalAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isModalOpen: false,
            emailLog: '',
            emailReg: '',
            loginReg:'',
            passwordLog: '',
            passwordReg: '',
            fio: '',
            address: '',
            phoneNum: ''


         };
    }
    clickSwitchingLoginAndRegister() {
        const frame = findDOMNode(this.refs.frame);
        const signin = findDOMNode(this.refs.signin);
        const signup = findDOMNode(this.refs.signup);
        const signupInactive = findDOMNode(this.refs.signupInactive);
        const signinActive = findDOMNode(this.refs.signinActive);
        $(signupInactive).toggleClass(style["signup-active"]);
        $(signinActive).toggleClass(style["signin-inactive"]);
        $(signup).toggleClass(style["form-signup-left"]);
        $(signin).toggleClass(style["form-signin-left"]);
        $(frame).toggleClass(style["frame-long"]);
    }
    openModal() {
        this.setState({ isModalOpen: true });
    }
    closeModal() {
        this.setState({ isModalOpen: false });
    }

    setFio = (e) => {
        this.setState({fio: e.target.value})
    }
    setEmailReg = (e) => {
        this.setState({emailReg:e.target.value})
    }
    setPasswordReg = (e) => {
        this.setState({passwordReg:e.target.value})
    }
    setPhoneNum = (e) => {
        this.setState({phoneNum:e.target.value})
    }
    setAddress = (e) => {
        this.setState({address:e.target.value})
    }
    setLoginReg = (e) => {
        this.setState({loginReg:e.target.value})
    }
    onSubmitReg = (e) =>{
        this.props.setRegistration(this.state.emailReg,this.state.loginReg,this.state.passwordReg,this.state.fio,this.state.address,this.state.phoneNum)
        e.preventDefault();
      }
    
    setEmailLog = (e) => {
        this.setState({emailLog:e.target.value})
    }
    setPasswordLog= (e) => {
        this.setState({passwordLog:e.target.value})
    }
    onSubmitLog = (e) =>{
        // this.props.setLogin(this.state.emailLog,this.state.passwordLog)
        this.props.getAuth()
        e.preventDefault();
      }

    
    render() {
        if (this.props.isAuth === true) return <Redirect to = {'/personal'}></Redirect> 
        if (this.props.isOpen === false) return null;

        return (
            <>
                <div className={style["bg"]}>
                    <div ref='frame' className={style["frame"]}>
                        <button onClick={e => this.close(e)} className={style["close-auth"]}>&times;</button>
                        <div className={style["nav"]}>
                            <ul className={style["links"]}>
                                <li ref='signinActive' className={style["signin-active"]}><a href='#s' onClick={() => this.clickSwitchingLoginAndRegister()} className={style["btn"]}>Вход</a></li>
                                <li ref='signupInactive' className={style["signup-inactive"]}><a href='#s' onClick={() => this.clickSwitchingLoginAndRegister()} className={style["btn"]}>Регистрация</a></li>
                            </ul>
                        </div>
                        <div >
                            <form ref='signin' className={style["form-signin"]} onSubmit={this.onSubmitLog} >
                                <label for="email">Email</label>
                                <input className={style["form-styling"]} required='required' type="email" name="email"  value={this.state.emailLog} onChange = {this.setEmailLog} />
                                <label for="password">Пароль</label>
                                <input className={style["form-styling"]} required='required' type="password" name="password" value={this.state.passwordLog} onChange = {this.setPasswordLog}  />
                                <input className={style["btn-signin"]} type="submit" value = "Войти"></input>
                            </form>
                            <form ref='signup' className={style["form-signup"]} onSubmit={this.onSubmitReg}>
                                <label for="fullname">ФИО</label>
                                <input className={style["form-styling"]} type="text" name="fullname" value={this.state.fio} onChange = {this.setFio} />
                                <label for="fullname">Логин</label>
                                <input className={style["form-styling"]} type="text" name="login" value={this.state.loginReg} onChange = {this.setLoginReg} />
                                <label for="email">Email</label>
                                <input className={style["form-styling"]} type="text" name="email" value={this.state.emailReg} onChange = {this.setEmailReg}/>
                                <label for="phone">Номер телефона</label>
                                <input className={style["form-styling"]} type="number" name="phone" value={this.state.phoneNum} onChange = {this.setPhoneNum} />
                                <label for="address">Адрес</label>
                                <input className={style["form-styling"]} type="text" name="address" value={this.state.address} onChange = {this.setAddress} />
                                <label for="password">Пароль</label>
                                <input className={style["form-styling"]} type="password" name="password" value={this.state.passwordFromReg} onChange = {this.setPasswordReg}/>
                                <input className={style["btn-signup"]} type="submit" value = "Зарегистрироваться" />
                            </form>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    close(e) {
        e.preventDefault();

        if (this.props.onClose) {
            this.props.onClose();
        }
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps,{setRegistration,setLogin,getAuth})(ModalAuth)
