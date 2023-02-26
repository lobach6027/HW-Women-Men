import React from "react";
import { useSelector } from "react-redux";
import Card from "../../compotents/Card/Card";
import s from "./style.module.css";

export default function Women() {
  const users = useSelector((store) => store.users);
  const women = users.filter((item) => item.gender === "Female");

  return (
    <div>
        <h1>Women</h1>
        <h3>Number of members: {women.length}</h3>
        <div>
      {women.length !== 0 ? (
        <div className={s.woman_list}>
          {women.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <p className={s.emptyBlock}>Place for women's cards</p>
      )}
    </div>
    </div>
  );
}
