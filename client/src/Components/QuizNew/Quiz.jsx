import React from "react";
import "./Quiz.css";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postQuizResult, postUserResult } from "../../Redux/action.js";
import { Link } from "react-router-dom";

export const Quiz = (props) => {
  const questionArr = props.questionArr;
  const data = useSelector((state) => state?.mernQuize?.QuizData);
  const result = useSelector((state) => state?.mernQuize?.result);
  const userID = useSelector((state) => state?.mernQuize?.userId);
  console.log("data",data)
  const quizID = data[0]?._id;
  const dispatch = useDispatch();

  const [num, setNum] = useState(0);
  const [ans, setAns] = useState([]);
  const [btnshow, setBtnshow] = useState(false);
  const [disable, setDisable] = useState(null);
  const handleQue = (index) => {
    setDisable(index);
  };

  return (
    questionArr?
    <div className=" w-11/12 mx-auto pt-5 mt-16 ">
      <div className="w-full shadow-lg p-4">
      <div className="border-teal-500 rounded-2xl absolute  right-24 top-32 border-2 mb-8 p-1 pl-2  pr-2 ">
            <h1 className="text-xl font-bold">
              Attempted : {num + "/" + questionArr.length}
            </h1>
      </div>
        <div className="flex justify-between align-middle">
            {/* <img  className="w-full h-full" src="./questionpages.gif" alt="think"/> */}
            <iframe className="w-full" src="https://embed.lottiefiles.com/animation/103649"></iframe>
            {/* <video className="w-full" src="./businessanalysis.mp4" /> */}
        </div>

        <div>
          <div className="flex w-4/5 mx-auto">
            <h1 className="text-2xl m-2 text-black-400/25">{num + 1})</h1>
            <h1 className="text-2xl m-2 text-black-400/25">
              {questionArr[num]?.questions}
            </h1>
          </div>

          <ol className="w-11/12 sm:w-3/5 mx-auto" disabled={disable}>
            {questionArr[num]?.options?.map((answer, index) => (
              <li
                key={index}
                className={
                  index == disable && disable != null
                    ? "show border border-gray-300 text-center cursor-pointer m-2 p-2 rounded-lg"
                    : `notshow border border-gray-300 text-center cursor-pointer m-2 p-2 rounded-lg`
                }
                onClick={(e) => {
                  setAns([...ans, answer.option]);

                  handleQue(index);
                }}
                >
                {answer.option}
              </li>
            ))}
          </ol>
        </div>
        <div className="w-fit mt-6 ml-auto">
         {/*} <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1"
            onClick={() => {
              setNum(num + 1);
              setDisable(null);
            }}
          >
            Skip
          </button>*/}
          {btnshow ? (
            <Link to="/showallanswer">
              {" "}
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded mr-1"
                onClick={() => {
                  dispatch(postUserResult(ans));
                  const obj = {
                    quizId: quizID,
                    userId: userID,
                    quizResult: ans,
                  };
                  dispatch(postQuizResult(obj));
                }}
              >
                Result
              </button>
            </Link>
          ) : (
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
              onClick={() => {
                setNum(num + 1);
                setDisable(null);
                if (questionArr.length - 2 === num) {
                  setBtnshow(true);
                }
              }}
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
    : <h1>No Questions</h1>
  );
};
