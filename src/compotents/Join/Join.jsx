import React from "react";
import s from "./style.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Join({addNewUser, users}) {


const onSubmit = (e)=>{
  e.preventDefault();
  const{name,gender,email,dateOfBirth, country, city} = e.target;
  addNewUser(name.value, gender.value,email.value,dateOfBirth.value, country.value, city.value);
  toast('Done!')
  e.target.reset()
}



console.log(users)
  return (
    <div className={s.wrapper}>
      <h2>Information</h2>
      <form onSubmit ={onSubmit} className={s.form}>
        <span>Name </span>
        <input name="name" type="text" placeholder="Name" required />
        <span>Gender</span>
        <div className={s.gender}>
        <p>Female </p><input type="radio" name="gender" value="Female" required />
        <p>Male </p><input type="radio" name="gender" value="Male" required/>
        </div>
        <span>Email</span>
        <input name="email" type="email" placeholder="anything@example.com" required />
        <span>Date of birthday</span>
        <input name="dateOfBirth" type="date" placeholder="Day-Month-Year" required />
        <span>Country </span>
        <input name="country" type="text" placeholder="Country" required />
        <span>City</span>
        <input name="city" type="text" placeholder="City" required />
        <input type="submit" name="submit" value="create new user"/>
      </form>
      <ToastContainer theme="dark"/>
    </div>
  );
}

