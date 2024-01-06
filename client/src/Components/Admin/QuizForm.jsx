import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz, postQuizObj, quizSuccess } from "../../Redux/action.js";

export const QuizForm = () => {
  const data = useSelector((state) => state.mernQuize.questions);
  const dispatch = useDispatch();

  

  const [ans, setAns] = useState([
    { option: "", isCorrect: false, id: 0 },
    { option: "", isCorrect: false, id: 1 },
    { option: "", isCorrect: false, id: 2 },
    { option: "", isCorrect: false, id: 3 },
  ]);

  const [quiz, setQuiz] = useState({
    title: "",
    questions: "",
    options: ans,
    correctAnswer: "",
  });


  const handleQuiz = (event) => {
    event.preventDefault();
    dispatch(quizSuccess(quiz));
    setQuiz({
    title: "",
    questions: "",
    options: [
      { option: "", isCorrect: false, id: 0 },
      { option: "", isCorrect: false, id: 1 },
      { option: "", isCorrect: false, id: 2 },
      { option: "", isCorrect: false, id: 3 },
    ],
    correctAnswer: "",
  })
  setAns([
    { option: "", isCorrect: false, id: 0 },
    { option: "", isCorrect: false, id: 1 },
    { option: "", isCorrect: false, id: 2 },
    { option: "", isCorrect: false, id: 3 },
  ])
  };
  const handleUploadnew = (event) => {
    event.preventDefault();
    if (data && data.length > 0) {
      const obj = {
        title: data[0].title,
        questionArray: data,
      };
  
      dispatch(postQuizObj(obj));
    } else {
      // Handle the case where data is not defined or empty
      console.error('Data is undefined or empty');
      // You can display an error message or take appropriate action here
    }
  };
  
  const handleType = (id) => (event) => {
    const { name, value } = event.target;
    setAns((prev) =>
      ans?.map((item) =>
        item.id === id
          ? { ...item, [name]: value == "true" ? true : value }
          : item
      )
    );
    setQuiz({ ...quiz, options: ans });
  };

  return (
    <div className="w-10/12 mx-auto flex justify-between flex-col lg:flex-row text-slate-50" style={{gap:'8rem'}}>
      <div className="w-1/2 mx-auto lg:w-1/4 xl:mt-0">
        <img className="w-full my-auto" src="./add.gif" alt="feedback" />
      </div>

      <div className="bg-black w-full mt-16 lg:mt-0 lg:w-6/12 p-6">
      <h1 className="text-2xl text-yellow-500 text-center">ADD QUESTIONS </h1>
        <div className="flex text-yellow-500 w-96 font-bold font-serif mb-2 mt-6 ">
        </div>
        <form className="mt-6">
          <label
            className="block uppercase tracking-wide  text-xs font-bold mb-2 "
            htmlFor="grid-first-name"
          >
            Title{" "}
          </label>
          <input
            className=" block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            value={quiz.title}
            placeholder="Title"
            onChange={(event) => {
              setQuiz({ ...quiz, title: event.target.value.toLowerCase() })
            }}
          />
          <label
            className="block uppercase tracking-wide text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Question{" "}
          </label>
          <input
            className=" block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            value={quiz.questions}
            placeholder="Question"
            onChange={(event) =>
              setQuiz({ ...quiz, questions: event.target.value })
            }
          />
          <label
            className="block uppercase tracking-wide  text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Options
          </label>
          <div className="">
            {ans?.map((x) => {
              return (
                <div key={x.id} className="flex flex-col sm:flex-row gap-1 ">
                  <input
                    className="w-full sm:w-1/2 block  bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    placeholder={`Option ${x.id+1}`}
                    name="option"
                    value={x.option}
                    onChange={(e) => {
                      handleType(x.id)(e);
                    }}
                  />
                  <select
                    className="form-select appearance-none
                  block
                  w-full 
                  sm:w-1/2
                  px-3
                  mb-2
                h-9
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding bg-no-repeat
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    name="isCorrect"
                    id=""
                    v-model="allowMultiple"
                    value={x.boolean}
                    onChange={(e) => {
                      handleType(x.id)(e);
                    }}
                  >
                    <option value="">Select the value</option>
                    <option value={true}>true</option>
                  </select>
                </div>
              );
            })}
          </div>
          <label
            className="block uppercase tracking-wide  text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Answer{" "}
          </label>
          <input
            className=" block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            value={quiz.correctAnswer}
            placeholder="Answer"
            onChange={(event) =>
              setQuiz({ ...quiz, correctAnswer: event.target.value })
            }
          />
          <div className="flex">
            
            <button
              onClick={handleQuiz}
              className="bg-blue mr-6 hover:bg-sky-500 text-white-700 font-semibold hover:text-white py-2 px-4 border bg-blue-500 hover:border-transparent rounded "
            >
              Submit
              
            </button>
            <button
              onClick={handleUploadnew}
              className=" bg-blue hover:bg-sky-500 text-white font-semibold hover:text-white py-2 px-4 border bg-blue-500 hover:border-transparent rounded  ml-35 "
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
