import React from 'react'
import FromContainer from './Form'
import s from './styles.module.css'

let Header = () => {
    return (
        <header className={s.header}>
            <h1>Todo list</h1>
            <FromContainer></FromContainer>
        </header>
    )
}

export default Header