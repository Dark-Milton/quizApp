import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuizDataFrombackend } from "../../Redux/action.js";
import { Link } from "react-router-dom";

export const Profile = () => {
  const data = useSelector((state) => state.mernQuize.QuizData);
  const [count, setCount] = useState(0);
  const userName = useSelector((state) => state.mernQuize.userName);

  return (
    <div className="margin-auto shadow-2xl py-6 w-11/12 mx-auto">
      <div className="border-red-500 w-40 flex justify-center bg-teal-300 rounded-2xl ml-auto mr-12 border-2 mb-8 p-1 pl-2  pr-2 ">
        <Link to="/">
          <button className="text-xl font-bold rounded-md">Attempt Quiz</button>
        </Link>
      </div>
      <h1 className="mt-10 w-10/12 mx-auto">
        <strong className="text-teal-500 text-2xl text-center md:text-left md:pl-32 font-extrabold italic">
          Sweat more in practice, bleed less in war.
        </strong>{" "}
        <br /> <p className="md:ml-96 pl-20 font-bold text-gray-800">– Spartan Warrior Credo</p>
      </h1>
      <div className="flex flex-col sm:flex-row justify-between w-10/12 mx-auto mt-12">
        <div className="w-11/12 mx-auto sm:w-6/12">
          <img src="./u1.webp" alt="profile" className="w-full" />
        </div>
        <h1 className="w-11/12 mx-auto sm:w-4/12 mt-12 text-3xl text-gray-800">
          {" "}
          Welcome! {userName}👋
          <br></br>
        All The Best...
        </h1>
       
      </div>
      
    </div>
  );
};