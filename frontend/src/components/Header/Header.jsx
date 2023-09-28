import React, { useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';
import { BiMenu } from 'react-icons/bi';

const navlinks = [
  {
    path: '/home',
    display: 'Home',
  },
  {
    path: '/doctors',
    display: 'Find a Therepists',
  },
  {
    path: '/services',
    display: 'Services',
  },
  {
    path: '/contact',
    display: 'Contact',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();

    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ====logo ====== */}
          <div>
            <img src={logo} alt="Logo" />
            <span></span>
          </div>
          {/* =======menu ====== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-2.7rem">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    exact
                    to={link.path}
                    activeClassName="text-primaryColor text-[16px] leading-7 font-[600]"
                    className="text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor ml-4"
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* ======== nav right =======*/}
          <div className="flex items-center gap-4">
            <Link to="/">
              <figure className="h-[35px] rounded-full cursor-pointer">
                <img src={userImg} className="w-full rounded-full" alt="" />
              </figure>
            </Link>
            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
