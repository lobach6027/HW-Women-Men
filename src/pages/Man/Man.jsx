import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../compotents/Card/Card'
import s from './style.module.css'

export default function Man() {
  const users = useSelector(state=>state.users)
  const man = users.filter((item) => item.gender === "Male");
  return (
    <div>
      <h1>Men</h1>
      <h3>Number of members:{man.length}</h3>
      <div>
      {man.length !== 0 ? (
        <div className={s.man_list}>
          {man.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <p className={s.emptyBlock}>Place for men's cards</p>
      )}
    </div>
    </div>
  )
}
