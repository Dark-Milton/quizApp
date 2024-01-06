import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer xl:mt-12 bg-slate-400 tracking-widest">
      
        
       
          
            <h3
              className="text-white text-xl uppercase p-1 border-b-2 border-white w-fit my-2"
              style={{
                width: "fit-content",
                color: "#4fa0e3",
                fontWeight: "bolder",
              }}
            >
              follow
            </h3>
            
            
            

            <div style={{ display: 'flex' }}>
              <a style={{ marginLeft: 'auto', width: '100%' }}
                href="https://www.instagram.com/chavhansudhir/?hl=en"
                className="no-underline text-white text-xs block xl:text-sm"
                target="_blank"
              >
                <div>
                <img src="./2.jpg" />
                </div>
                Instagram
              </a>
           
              <a style={{ marginLeft: 'auto', width: '100%' }}
                href="https://www.instagram.com/chavhansudhir/?hl=en"
                className="no-underline text-white text-xs block xl:text-sm"
                target="_blank"
              >
               
                Instagram
              </a>

              <a style={{ marginLeft: 'auto', width: '100%' }}
                href="https://www.instagram.com/chavhansudhir/?hl=en"
                className="no-underline text-white text-xs block xl:text-sm"
                target="_blank"
              >
               
                Instagram
              </a>
            </div>
           
            
            
          </div>
          
       
      
      
    
  );
};
