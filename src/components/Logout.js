import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";


const Logout = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://18.117.145.31/user/logout/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally((err) => {
        window.localStorage.clear();
        console.log(window.localStorage.getItem('user'));
      });
    }
  return (
    <div class="container">
      <form onSubmit={submitHandler}>
        <button onClick={() => navigate("/")} className="homeBtn">
          Logout
        </button>
      </form>
    </div>
  );
};
export default Logout;
