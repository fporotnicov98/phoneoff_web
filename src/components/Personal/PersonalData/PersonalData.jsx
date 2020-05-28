import React from 'react'
import './PersonalData.scss'

const PersonalData = (props) => {
    return (
        <div className="information__data">
            <div className="information__title">Личные данные</div>
            <div className="data__row">
                <div className="data__body">
                    <form action="" className="data__form" method="GET">
                        <div className="data__input">
                            <span>ФИО:</span>
                            <label>{props.auth.fio}</label>
                        </div>
                        <div className="data__input">
                            <span>Логин:</span>
                            <label>{props.auth.login}</label>
                        </div>
                        <div className="data__input">
                            <span>Телефон:</span>
                            <label>{props.auth.phoneNumber}</label>
                        </div>
                        <div className="data__input">
                            <span>Адрес:</span>
                            <label>{props.auth.address}</label>
                        </div>
                        <div className="data__input">
                            <span>Электронная почта:</span>
                            <label>{props.auth.email}</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PersonalData;