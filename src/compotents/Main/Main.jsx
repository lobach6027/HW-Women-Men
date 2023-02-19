import React from "react";
import { Link } from "react-router-dom";
import s from "./style.module.css";

export default function Main() {
  return (
    <div className={s.info}>
      <div className={s.join_block}>
        <p>Press to join: </p>
        <p className={s.link}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/join">
            join the community
          </Link>
        </p>
      </div>
    </div>
  );
}
