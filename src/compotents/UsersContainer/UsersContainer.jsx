import React from "react";
import ManContainer from "../ManContainer/ManContainer";
import WomenContainer from "../WomenContainer/WomenContainer";
import s from "./style.module.css";

export default function UsersContainer() {
  return (
    <div className={s.container}>
      <div>
        <h2>Men</h2>
        <ManContainer />
      </div>
      <div>
        <h2>Women</h2>
        <WomenContainer />
      </div>
    </div>
  );
}
