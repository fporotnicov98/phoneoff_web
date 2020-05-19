import React from 'react'
import style from './ModalRegister.module.scss'
import { NavLink } from 'react-router-dom';


class ModalRegister extends React.Component {
    render() {
        if (this.props.isOpen === false) return null;

        return (
            <>
                <div className={style["bg"]}>
                    <div className={style["modal-dialog"]}>
                        <button onClick={e => this.close(e)} className={style["close-auth"]}>&times;</button>
                        <form action="">
                            <span className={style['title']}>Регистрация</span>
                            <div className={style['wrap-input']}>
                                <input type="text" name="name" placeholder='Имя' />
                            </div>
                            <div className={style['wrap-input']}>
                                <input type="text" name="first-name" placeholder='Фамилия' />
                            </div>
                            <div className={style['wrap-input']}>
                                <input type="text" name="login" placeholder='Логин' />
                            </div>
                            <div className={style['wrap-input']}>
                                <input type="tel" name="login" placeholder='Телефон' />
                            </div>
                            <div className={style['wrap-input']}>
                                <input type="mail" name="email" placeholder='Email' />
                            </div>
                            <div className={style['wrap-input']}>
                                <input type="passworыd" name="password" placeholder='Пароль' />
                            </div>
                            <button className={style['login-btn']}><NavLink to='/personal'>Зарегистрироваться</NavLink></button>
                            <div className={style['block1']}>
                                <span className={style['txt1']}>Уже зарегистрированы?</span>
                                <a href="#s" className={style['txt2', 'hov1']}>Вход</a>
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



export default ModalRegister;
