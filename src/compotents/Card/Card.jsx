import React from "react";
import s from "./style.module.css";

export default function Card({ name, country, city, gender }) {
  return (
    <div className={gender==="Female"?s.women:s.men}>
      <h2>{name}</h2>
      <div className={s.info}>
        <p>{gender}</p>
        <p>{country}</p>
        <p>{city}</p>
      </div>
    </div>
  );
}
