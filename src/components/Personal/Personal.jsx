import React from 'react'
import style from './Personal.module.scss'
import PersonalData from './PersonalData/PersonalData';
import Order from './Order/Order';

const Personal = () => {
    return (
        <div className={style.information__row}>
            <PersonalData />
            <Order />
        </div>
    )
}

export default Personal;