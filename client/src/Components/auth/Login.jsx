import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAdminId,
  loginAdminName,
  loginUser,
  loginUserName,
} from "../../Redux/action.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios
      .post("http://localhost:3755/login", user)
      .then((res) => {
        if (res.data.user.email == "likhithakulal@gmail.com") {
          dispatch(loginAdminId(res.data.user._id));
          dispatch(loginAdminName(res.data.user.name));
          toast(`Welcome Admin ${res.data.user.name}`, {
            type: "success",
          });

          setTimeout(() => {
            navigate("/profile");
          }, 4000);
        } else {
          dispatch(loginUser(res.data.user._id));
          dispatch(loginUserName(res.data.user.name));
          toast(`Successfully Login `, {
            type: "success",
          });
          setTimeout(() => {
            navigate("/profile");
          }, 3000);
        }

        //         if(res.data.message=="login successfully"){
        // alert("Login successfully")
        //         }
        // navigate('/')
      })
      .catch((err) => {
        toast("Invalid Credientials", {
          type: "error",
        });
      });
  };

  return (
    <div className=" flex w-4/5 justify-around m-auto mt-16 mb-16">
      <div className="mb-28 w-1/2 login">
        <h1 className="text-2xl font-semibold">Login</h1>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your Email"
        ></input>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter your Password"
        ></input>
        <div>
          {" "}
          <button
            onClick={() => {
              login();
            }}
            className="p-2 w-full bg-blue-500 h-10 rounded-md text-white  text-xl "
          >
            Login
          </button>
          <ToastContainer />
        </div>
        <div>OR</div>
        <Link to="/register">
          {" "}
          <button className="p-2 w-full bg-blue-500 h-10 rounded-md text-white  text-xl ">
            Register
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};
