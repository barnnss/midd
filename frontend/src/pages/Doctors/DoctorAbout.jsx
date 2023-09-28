import React from "react";
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
        About of{" "}
        <span className="text-irisBlueColor font-bold text-[24px] leading-9">Mahabir Pun</span>
      </h3>
      <p className="text_para">
        Hello, I am abcd. lskfs kjdsklfjsljfl skdfjlskfl skfsjfkjsfkl dsfnksfjskjfk jskjskjfskjdf 
        jsfkjslksjf ewiroimcldkjs sjfksuehfds sdlkfjlsjf sdkfjlskjflsdjfl kjdlkfjslkfjslkfslkd jlksfdjsl dsjfnknfks jsdfnkjshfksjf.
      </p>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Education</h3>
      <ul className="pt-4 md:p-5">
      <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
         <div>
            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("05-12-2002")} - {formateDate("05-22-2006")}
                </span>  
            <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Phyciatry</p>
          </div>
          <p className="text-[14px] leading-5 font-medium text-textColor">Dhulikhel Hospital,Dhulikhel</p>
        </li>
        <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
         <div>
            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("07-04-2010")} - {formateDate("05-22-2015")}
                </span>  
            <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Phyciatry</p>
          </div>
          <p className="text-[14px] leading-5 font-medium text-textColor">ABC Hospital, Katmandu</p>
        </li>
      </ul>
      </div>
      <div className="mt-12">
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
        Experience 
      </h3>
      <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
        <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
            {formateDate("07-04-2010")} - {formateDate("05-22-2015")}
            </span>
            <p className="text-[15px] leading-6 font-medium text-textColor">
                Sr. Psychiatrist
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">ABC Hospital, Katmandu</p>
        </li>
        <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
            {formateDate("07-04-2010")} - {formateDate("05-22-2015")}
            </span>
            <p className="text-[15px] leading-6 font-medium text-textColor">
                Sr. Psychiatrist
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">Dhulikhel Hospital, Dhulikhel</p>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
