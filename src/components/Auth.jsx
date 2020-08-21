import React, { useState } from 'react';
import Style from './Auth.module.css'

const Auth = props => {

    const [nickname, setNickname] = useState('unnamed')
    const [color, setColor] = useState('#ffffff');

    const { auth, setAuthorization } = props;

    const submitHandler = (name, clr) => {
        if (name === '') {
            setNickname('unnamed');
        } else {
            setAuthorization({ name, clr });
        }

    }

    const clrbox = auth.colors.map((i, indx) => {

        if (color === i) {
            return <div
                style={{ backgroundColor: i, width: '40px', height: '40px' }}
                className={Style.box}
                key={indx}></div>
        } else {
            return <div
                onClick={() => {
                    setColor(i)
                }}
                style={{ backgroundColor: i }}
                className={Style.box}
                key={indx}>
            </div>
        }

    })

    return <div className={Style.authWrapper}>
        <div className={Style.nicknameAuth}>
            <span>Введите никнейм</span>
            <input
                onChange={(e) => setNickname(e.target.value)}
                type="text"
                value={nickname}
            />
        </div>
        <div className={Style.colorsetter}>
            <span>Выбери цвет</span>
            <div className={Style.colorbox}>
                {clrbox}
            </div>
        </div>
        <button
            onClick={() => {
                submitHandler(nickname, color)
            }}
            className={Style.btn}
            type='button'
        >log in</button>
    </div>
}

export default Auth;