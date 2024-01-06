import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ShowAllAnswers = () => {
  const resultUser = useSelector((state) => state.mernQuize.result);
  const singleQuiz = useSelector((state) => state?.mernQuize.QuizData);
  const questionArr = singleQuiz[0]?.questionArray;
  const pdfRef =useRef();
    const downloadPDF =() =>{
      const input =pdfRef.current;
      html2canvas(input).then((canvas)=>{
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p','mm','a4',true);
        const pdfWidth=pdf.internal.pageSize.getWidth();
        const pdfHeight=pdf.internal.pageSize.getHeight();
        const imgWidth=canvas.width;
        const imgheight=canvas.height;
        const ratio=Math.min(pdfWidth/imgWidth,pdfHeight/imgheight);
        const imgX=(pdfWidth-imgWidth*ratio)/2;
        const imgY=30;
        pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgheight*ratio);
        pdf.save('result.pdf');
      });
    };

  return (
    <div>
      <div className="flex w-11/12 mx-auto mt-12 mb-1 bg-white" ref={pdfRef}>
        <div className=" w-6/12 ">
          <div className="text-center">
            <h1 className="text-xl font-medium font-serif text-black">
              QUESTIONS
            </h1>
          </div>

          {questionArr?.map((e, index) => {
            return (
              <div className="h-16 mt-4 border-2 pl-4 text-2xl">
                <p>
                  {index + 1} {e.questions}
                </p>
              </div>
            );
          })}
        </div>
        <div className=" w-3/12">
          <div className="text-center">
            <h1 className="text-xl font-medium font-serif text-black">
              USER ANSWER
            </h1>
          </div>
          {resultUser?.map((e) => {
            return (
              <div className="h-16 mt-4 border-2 text-center red">
                <p>{e}</p>
              </div>
            );
          })}
        </div>
        <div className="w-3/12">
          <div className="text-center">
            <h1 className="text-xl font-medium font-serif text-black">
              CORRECT ANSWER
            </h1>
          </div>
          {questionArr?.map((e) => {
            return (
              <div className="h-16 mt-4 text-center border-2 red">
                <p>{e.correctAnswer}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" w-36  border-2 p-1 pl-2 text-center  pr-2 bg-teal-400  finalresult mt-3 ">
        <Link to="/result">
          <button className="text-xl  font-bold">Final Marks</button>
        </Link>
      </div>
      <div className=" w-36  border-2 p-1 pl-2 text-center  pr-2 bg-teal-400  finalresult ">
        
          <button className="text-xl  font-bold" onClick={downloadPDF}>Download</button>
        
      </div>
    </div>
  );
};
