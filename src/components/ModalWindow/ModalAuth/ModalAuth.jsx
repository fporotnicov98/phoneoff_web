import React from 'react'
import style from './ModalAuth.module.scss'
// import { NavLink } from 'react-router-dom';
// import ModalRegister from '../ModalRegister/ModalRegister';
import $ from 'jquery'
import { findDOMNode } from 'react-dom';
import { NavLink } from 'react-router-dom';


class ModalAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isModalOpen: false };
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
    render() {
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
                            <form ref='signin' className={style["form-signin"]} action="" method="post" name="form">
                                <label for="username">Email</label>
                                <input className={style["form-styling"]} required='required' type="text" name="username" />
                                <label for="password">Пароль</label>
                                <input className={style["form-styling"]} required='required' type="password" name="password" />
                                <input type="checkbox" id="checkbox" />
                                <label for="checkbox" ><span className={style["ui"]}></span><p>Запомнить меня</p></label>
                                <NavLink className={style["btn-signin"]} to='/personal'>Войти</NavLink>
                            </form>
                            <form ref='signup' className={style["form-signup"]} action="" method="post" name="form">
                                <label for="fullname">ФИО</label>
                                <input className={style["form-styling"]} type="text" name="fullname" />
                                <label for="email">Email</label>
                                <input className={style["form-styling"]} type="text" name="email" />
                                <label for="password">Пароль</label>
                                <input className={style["form-styling"]} type="text" name="password" />
                                <label for="confirmpassword">Повторите пароль</label>
                                <input className={style["form-styling"]} type="text" name="confirmpassword" />
                                <NavLink className={style["btn-signup"]} to='/personal'>Зарегистрироваться</NavLink>
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



export default ModalAuth;
