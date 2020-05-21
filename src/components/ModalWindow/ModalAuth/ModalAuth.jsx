import React from 'react'
import style from './ModalAuth.module.scss'
import { NavLink } from 'react-router-dom';
// import ModalRegister from '../ModalRegister/ModalRegister';


class ModalAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isModalOpen: false };
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
                    <div className={style["modal-dialog"]}>
                        <button onClick={e => this.close(e)} className={style["close-auth"]}>&times;</button>
                        <form action="">
                            <span className={style['title']}>Авторизация</span>
                            <div className={style['wrap-input']}>
                                <input type="text" className={style['login']} placeholder='Email или логин' />
                            </div>
                            <div className={style['wrap-input']}>
                                <input type="password" className={style['password']} placeholder='Пароль' />
                            </div>
                            <button className={style['login-btn']}><NavLink to='/personal'>Войти</NavLink></button>
                            <div className={style['block1']}>
                                <span className={style['txt1']}>Забыли</span>
                                <a href="#s" className={style['txt2']}>Пароль?</a>
                            </div>
                            <div className={style['block2']}>
                                <span className={style['txt1']}>Не зарегистрированы?</span>
                                <button className={style['txt2']}>Регистрация</button>
                            </div>
                        </form>
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
