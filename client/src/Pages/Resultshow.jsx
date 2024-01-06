import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FacebookShareButton } from 'react-share';
import { FaFacebook } from 'react-icons/fa';
import { EmailShareButton, EmailIcon } from 'react-share';
import { WhatsappShareButton, WhatsappIcon } from 'react-share';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const Resultshow = () => {
  let [count, setCount] = useState(0);
  let [feedback, setFeedback] = useState("");
  const UserName = useSelector((state) => state.mernQuize.userName);
  const resultUser = useSelector((state) => state.mernQuize.result);

  let originalResult = [];
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
        const imgY=50;
        pdf.addImage(imgData,'PNG',imgX,imgY,imgWidth*ratio,imgheight*ratio);
        pdf.save('result.pdf');
      });
    };
  const filterAtualAnswer = (el) => {
    el.map((e) => {
      originalResult.push(e.correctAnswer);
    });
  };
  filterAtualAnswer(questionArr);

  for (let i = 0; i < originalResult.length; i++) {
    
      if (resultUser[i] == originalResult[i]) {
        count++;
        //break;
      
    }
  }

  const calcPercent = () => {
    const percentage = Math.round((count / resultUser.length) * 100);
    if (percentage > 90) {
      setFeedback(`Congratulations! ${UserName} You cleared the Test! `);
    } else if (percentage > 50 && percentage < 90) {
      setFeedback(
        `Congratulations! ${UserName} `
        `You cleared the Test! and Keep Practicing `
      );
    } else {
      setFeedback(
        `Sorry!, You are failed to complete the Test! You need to Work Hard! and Keep Practicing  ${UserName}`
      );
    }

  };
  useEffect(() => {
    calcPercent();
  });

  const shareUrl = 'https://www.example.com';
  const subject = 'Check out this link';
  const body = 'I found this interesting link and wanted to share it with you.';
  const shareUrl1 = 'http://www.localhost:3000/';
  const title = 'Check out this link';
  
  return (
    <div class="bg ">
    <div className=" w-11/12 shadow-2xl mx-auto mt-24"ref={pdfRef}>
      {/*<h1 className="ml-73 pl-64 mt-8 text-3xl text-sky-700">
        Result Analysis
  </h1>*/}
      <div className="flex -mt-20 ml 48">
        <div className="mt-24">
          <img src="./quiz.jpg" alt="resultAnalysis" />
        </div>
        <div className="w-3/5  mt-24 p-8 ml-0 text-black text-5xl">
          Result Analysis
          <br></br><br></br>

          <h1 className="text-2xl text-red-600">{feedback}</h1>
          <br></br>
          <strong className="text-4xl italic text-teal-500">
            Total Marks : {count}/{questionArr.length}
          </strong>
        </div>
        
      </div>
      <div className=" w-40 mt-28 border-2 p-1 pl-2 text-center  pr-2 bg-teal-400  finalresult ">
          
          <button className="text-xl  font-bold" onClick={downloadPDF}>Download</button>
        
      </div>
      <div className=" absolute  bg-blue-300 rounded-2xl right-24 top-36 border-2 mb-8 p-2 pl-4  pr-4 ">
        <Link to="/">
          <button className="text-xl font-bold ">Attempt More Quiz</button>
          </Link>
      </div>
      </div>
      <div>
      <FacebookShareButton
        url={'https://www.example.com'}
        quote={'Dummy text!'}
        hashtag="#muo"
      >
        <FaFacebook size={32} round />
      </FacebookShareButton>
    </div>
    <div>
    <EmailShareButton url={shareUrl} subject={subject} body={body}>
      <EmailIcon size={32} round />
    </EmailShareButton>
    </div>
    <div>
    <WhatsappShareButton url={shareUrl1} title={title}>
      <WhatsappIcon size={32} round />
    </WhatsappShareButton>
    </div>
    </div>
  );
};
