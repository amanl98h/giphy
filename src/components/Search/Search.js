import React from 'react'
import s from './Search.module.css'

export default function Search({ count, setCount, getGiphy }) {
    return (
        <div className={s.conteiner}>
            
            <button onClick={getGiphy}><input type='text'
                placeholder='enter the count'
                value={count}
                onChange={(e) => { setCount(e.target.value) }}
            />Search</button>
        </div>
    )
}

