import React from "react";
import s from "./style.module.css";
import {useDispatch} from 'react-redux'

export default function Card({ id, name, country, city, gender, dateOfBirth }) {
  const dispatch  = useDispatch()
  const year = new Date().getFullYear();
  const user_year = dateOfBirth.slice(0, 4);
  const age = year - user_year;
  console.log(age);

  return (
    <div  className={gender === "Female" ? s.women : s.men}>
      <h2>{name} </h2>
      <button onClick={()=>dispatch({type:"DELETE", payload: id})} className={s.delButton}>x</button>
      <div className={s.info}>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
        <p>Country: {country}</p>
        <p>City: {city}</p>
      </div>
    </div>
  );
}
