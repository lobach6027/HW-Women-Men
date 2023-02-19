import React, { useEffect } from "react";
import Join from "../Join/Join";
import UsersContainer from "../UsersContainer/UsersContainer";
import { useState } from "react";

export default function Form() {
  const [users, setUsers] = useState(()=>{
    return JSON.parse(localStorage.getItem('users'))?? [];
  });


  useEffect(()=>{
    localStorage.setItem('users', JSON.stringify(users))
  },[users])
  const addNewUser = (name, gender, email, dateOfBirth, country, city, image) => {
    const newUser = {
      id: Date.now(),
      name,
      gender,
      email,
      dateOfBirth,
      country,
      city,
      image
    };
    setUsers([...users, newUser]);
  };
  console.log(users);

  return (
    <div>
      <Join addNewUser={addNewUser} users={users} />
      <UsersContainer users={users} />
    </div>
  );
}
