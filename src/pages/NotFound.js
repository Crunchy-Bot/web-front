import React from "react";
import {Link} from "react-router-dom";

const iconArea = process.env.PUBLIC_URL;


function NotFound() {
  return (
      <>
          <div className="flex flex-col-reverse xl:flex-row justify-center items-center px-4 xl:px-0 mx-4 mb-4 h-full">
              <img className="object-contain transform scale-75" src={ `${iconArea}/emojis/hime-confuse.png` } alt=""/>
              <div className="flex flex-col w-full xl:w-1/2 pt-4 xl:pt-0 ml-0 xl:ml-16">
                  <h1 className="text-white text-5xl text-center xl:text-left italic font-bold pb-4">I think we've gotten lost</h1>
                  <p className="text-white text-2xl text-center xl:text-left font-semibold">
                      Check the url you have entered is correct,
                      if you think something should be here please contact support.
                  </p>
                  <div className="flex justify-center xl:justify-start flex-wrap w-full pt-12">
                      <Link to="/home" className="font-bold border-b-3 border-crunchy hover:border-white text-white text-2xl transition duration-200 mx-2 my-2 xl:my-0 px-2 pb-1">
                          Take Me Home
                      </Link>
                  </div>
              </div>
          </div>
      </>
  );
}

export default NotFound;
