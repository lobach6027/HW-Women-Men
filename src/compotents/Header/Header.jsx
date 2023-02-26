import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'

export default function Header() {
  return (
    <header className={s.header}>
      <img src="https://askthescientists.com/wp-content/uploads/2018/04/AdobeStock_62125649.png" alt="logo" />
      <nav>
        <span><Link  className={s.link} to = "/">Main</Link></span>
        <span><Link className={s.link} to = "/about">About</Link></span>
        <span><Link className={s.link} to = "/ourwomen">Our women</Link></span>
        <span><Link className={s.link} to = "/ourman">Our men</Link></span>
        <span><Link className={s.link} to = "/join">Join</Link></span>
      </nav>
    </header>
  )
}
