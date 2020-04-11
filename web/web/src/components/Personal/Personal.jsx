import React from 'react'
import './Personal.scss'
import PersonalData from './PersonalData/PersonalData';
import Order from './Order/Order';

const Personal = () => {
    return (
        <div className="information">
            <div className="container">
                <div className="information__row">
                    <PersonalData />
                    <Order />
                </div>
            </div>
        </div >
    )
}

export default Personal;