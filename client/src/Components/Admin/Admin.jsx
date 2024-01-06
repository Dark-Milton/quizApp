import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUserDataFromBackend } from "../../Redux/action.js";
import { QuizForm } from "./QuizForm.jsx";
import { UserdetailForAdmin } from "./UserdetailForAdmin.jsx";


export const Admin = () => {
  const allUsers = useSelector((state) => state.mernQuize.Alluser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addquiz = () => {
    navigate("/addquiz");
  };

  useEffect(() => {
    dispatch(getAllUserDataFromBackend());
  }, []);

  return (
    <div>
      
          {/*<div className="ml-32 ">
            <img
              className="h-[125px] w-[250px] rounded-full"
              src="./admin.gif"
              alt=""
            />
          </div>*/}
           <div className="w-10/12 mx-auto flex justify-between">
            <h1 className="title text-2xl md:text-3xl lg:text-4xl font-semibold text-sky-500 pb-6" style={{ fontFamily: "Quicksand" }}>
              Hi Admin, DoubleQuads.. 👋
            </h1>
            <div className="border-red-500 bg-sky-600 border-2 mb-8 p-1 pl-2  pr-2 ">
              <button onClick={addquiz}> ADD QUIZ </button>
            </div>
          </div>
                <br/><br/><UserdetailForAdmin data={allUsers} />
        {/* <div className="w-5/12 p-16 ml-24">
          <img
            src="./admin.jpg"
            alt="admin"
            className="h-[300px] w-[300px] rounded-full "
          />
        </div> */}
      
      
      {/* <UserdetailForAdmin data={allUsers} /> */}
    </div>
  );
};