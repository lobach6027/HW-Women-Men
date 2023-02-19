import React from 'react'
import Card from '../Card/Card';
import s from './style.module.css'

export default function WomenContainer({users}) {
  const women = users.filter((item)=>item.gender ==="Female")
  return (
    <div>
      {women.length!==0?<div className={s.woman_list}>{
        women.map((item)=><Card key={item.id} {...item}/>)
        }</div>:<p className={s.emptyBlock}>Place for women's cards</p>}
    </div>
    
  )
}
