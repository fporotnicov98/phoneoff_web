import React from 'react'
import './PersonalData.scss'

const PersonalData = () => {
    return (
        <div className="information__data">
            <div className="information__title">Личные данные</div>
            <div className="data__row">
                <div className="data__body">
                    <form action="" className="data__form" method="GET">
                        <div className="data__input">
                            <span>Имя</span>
                            <input type="text" tabIndex="1" name="name" placeHolder="Иван" />
                        </div>
                        <div className="data__input">
                            <span>Фамилия</span>
                            <input type="text" tabIndex="2" name="firstname" placeHolder="Иванов" />
                        </div>
                        <div className="data__input">
                            <span>Телефон</span>
                            <input type="tel" tabIndex="3" name="phone" placeHolder="+7(999)888-88-88" />
                        </div>
                        <div className="data__input">
                            <span>Дата рождения</span>
                            <input type="date" tabIndex="4" name="birthday" />
                        </div>
                        <div className="data__input">
                            <span>Пол</span>
                            <div className="radio">
                                <input type="radio" tabIndex="5" name="sex" /> м
                                <input type="radio" tabIndex="5" name="sex" /> ж
                            </div>
                        </div>
                        <div className="data__input">
                            <span>Электронная почта</span>
                            <input type="text" tabIndex="6" name="mail" placeHolder="phoneoff@gmail.com" />
                        </div>
                        <div className="data__input">
                            <span>Пароль</span>
                            <input type="password" tabIndex="7" name="password" placeHolder="123456789123456789" />
                        </div>
                        <div className="data__buttons">
                            <button className="data__btn-change">Сменить пароль</button>
                            <button className="data__btn-save">Сохранить изменения</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PersonalData;