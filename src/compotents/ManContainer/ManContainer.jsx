import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import s from "./style.module.css";

export default function ManContainer() {
  const users = useSelector((store) => store.users);
  const man = users.filter((item) => item.gender === "Male");
  console.log(man)
  return (
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
  );
}
