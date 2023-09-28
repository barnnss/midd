import React from "react";
import { Link } from "react-router-dom";

import logo from '../../assets/images/logo.png';
import {RiLinkedinFill} from 'react-icons/ri'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';



const socialLinks = [
  { 
    path:"https:www.facebook.com",
    icon: <AiOutlineFacebook className="group-hover:text-white w-4 h-5" />
  },
  {
    path:"https:www.instagram.com",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />
  },
  {
    path:"https:www.twitter.com",
    icon: <AiOutlineTwitter className="group-hover:text-white w-4 h-5" />
  },
];
const quicklinks01 =[
    {
        path:"/home",
        display:"Home",
    },
    {
        path:"/about",
        display:"About Us",
    },
    {
        path:"/services",
        display:"Services",
    },
    {
        path:"/",
        display:"Blog",
    },
];

const quicklinks02 =[
    {
        path:"/find-a-doctor",
        display:"find a Doctor",
    },
    {
        path:"/",
        display:"Request an appointment",
    },
    {
        path:"/",
        display:"Get a opinion",
    },
    {
        path:"/",
        display:"find a location",
    },
];
const quicklinks03 =[
    {
        path:"/",
        display:"Donate",
    },
    {
        path:"/Contact",
        display:"Contact Us",
    },
   
];
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
      <div className="flex justify-between md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              &copy; {year} developed by Team Antarman, all rights reserved.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
         <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                Quick Links
            </h2>
            <ul>
                {quicklinks01.map((item,index) =>( <li key={index} className="mb-4">
                    <Link to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor">
                        {item.display}
                        </Link>
                        </li>
                        ))}
            </ul>
             </div>
            <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                I want to 
            </h2>
            <ul>
                {quicklinks02.map((item,index) =>( <li key={index} className="mb-4">
                    <Link to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor">
                        {item.display}
                        </Link>
                        </li>
                        ))}
            </ul>


            </div>
            <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
                Support
            </h2>
            <ul>
                {quicklinks03.map((item,index) =>( <li key={index} className="mb-4">
                    <Link to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor">
                        {item.display}
                        </Link>
                        </li>
                        ))}
            </ul>
            </div>
         </div>

        </div>
      
    </footer>
  );
};

export default Footer;