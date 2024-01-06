import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const TopicQuiz = () => {
  const userId = useSelector((state) => state.mernQuize.userId);
  const navigate = useNavigate();
  const name = useSelector((state) => state.mernQuize.userName);

  return (
    <div className="mt-10 mb-10 ">
      <div className="justify-self-center header">
        <h1 className="font-bold text-7xl text-center">Prepare By Topics</h1>
      </div>
      {/* <div className="justify-self-center ml-96">
        <h1 className="font-bold text-7xl ml-44 pl-12">Prepare By Topics</h1>
      </div> */}
      <div className="grid grid-cols-2 w-11/12 p-10 m-auto gap-8 shadow-2xl">
        {userId ? (
          <Link to="/quiz/html">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl ">HTML</h1>
              </div>
              {/*<img className="w-2/5  rounded-2xl" src="/html-5.gif" alt="" />*/}
            </div>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl ">HTML</h1>
              </div>
              {/*<img className="w-2/5  rounded-2xl" src="/html-5.gif" alt="" />*/}
            </div>
          </Link>
        )}
        {userId ? (
          <Link to="/quiz/css">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">CSS</h1>
              </div>
              {/*<img
                className="w-2/5 mr-0  rounded-2xl"
                src="./css3.gif"
                alt=""
        />*/}
            </div>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">CSS</h1>
              </div>
             {/*} <img
                className="w-2/5 mr-0  rounded-2xl"
                src="./css3.gif"
                alt=""
        />*/}
            </div>
          </Link>
        )}
        {userId ? (
          <Link to="/quiz/javascript">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full  h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">JavaScript</h1>
              </div>
              {/*<img
                className="w-2/5 rounded-2xl "
                src="./javascript.gif"
                alt=""
        />*/}
            </div>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full  h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">JavaScript</h1>
              </div>
              {/*<img
                className="w-2/5 rounded-2xl "
                src="./javascript.gif"
                alt=""
        />*/}
            </div>
          </Link>
        )}

        {userId ? (
          <Link to="/quiz/react">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">React</h1>
              </div>
              {/*<img className="w-2/5 rounded-2xl " src="./react.gif" alt="" />*/}
            </div>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">React</h1>
              </div>
              {/*<img className="w-2/5 rounded-2xl " src="./react.gif" alt="" />*/}
            </div>
          </Link>
        )}
        {userId ? (
          <Link to="/quiz/redux">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">Redux</h1>
              </div>
              {/*<img
                className="w-2/5 rounded-2xl bg-white"
                src="./redux.svg"
                alt=""
              />*/}
            </div>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">Redux</h1>
              </div>
              {/*<img
                className="w-2/5 rounded-2xl bg-white"
                src="./redux.svg"
                alt=""
              />*/}
            </div>
          </Link>
        )}
        {userId ? (
          <Link to="/quiz/mongodb">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">MongoDb</h1>
              </div>
             {/*} <img
                className="w-2/5 rounded-2xl h-full"
                src="./mongo.gif"
                alt=""
              />*/}
            </div>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">MongoDb</h1>
              </div>
              {/*<img
                className="w-2/5 rounded-2xl h-full"
                src="./mongo.gif"
                alt=""
              />*/}
            </div>
          </Link>
        )}

{userId ? (
          <Link to="/quiz/movie">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">Movie</h1>
              </div>
              {/*<img className="w-2/5 rounded-2xl " src="./react.gif" alt="" />*/}
            </div>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">Movie</h1>
              </div>
              {/*<img className="w-2/5 rounded-2xl " src="./react.gif" alt="" />*/}
            </div>
          </Link>
        )}
        {userId ? (
          <Link to="/quiz/Actors">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">Actors</h1>
              </div>
              {/*<img
                className="w-2/5 rounded-2xl bg-white"
                src="./redux.svg"
                alt=""
              />*/}
            </div>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">Actors</h1>
              </div>
              {/*<img
                className="w-2/5 rounded-2xl bg-white"
                src="./redux.svg"
                alt=""
              />*/}
            </div>
          </Link>
        )}
        {userId ? (
          <Link to="/quiz/sports">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">Sports</h1>
              </div>
              {/*<img
                className="w-2/5 rounded-2xl h-full"
                src="./mongo.gif"
                alt=""
              />*/}
            </div>
          </Link>
        ) : (
          <Link to="/register">
            {" "}
            <div className="border-2 cursor-pointer topicdiv text-white font-sans text-4xl font-bold  h-36 justify-items-center rounded-2xl flex">
              <div className="w-full h-full bg-rgb(27,169,76) flex items-center">
                <h1 className="w-full text-center topicdivh1 text-xl md:text-3xl">Sports</h1>
              </div>
             {/*} <img
                className="w-2/5 rounded-2xl h-full"
                src="./mongo.gif"
                alt=""
              />*/}
            </div>
          </Link>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};
