import React from 'react'
import s from './Output.module.css'

export default function Output({data}) {
  return (
    <div className={s.conteiner}>
        {
            data?.map((el)=>{
                return (
                    <div key={el.id} className={s.conteiner_body} >
                        <iframe src={el.embed_url}/>
                        <p>{el.title}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
