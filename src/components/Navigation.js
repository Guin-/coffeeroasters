import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/shared/desktop/logo.svg';
import iconHamburger from '../assets/shared/mobile/icon-hamburger.svg';
import iconClose from '../assets/shared/mobile/icon-close.svg';

function Navigation () {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between py-3 mb-3">
        <div className="w-full flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img src={logo} className="inline-block mr-4 py-2" alt="logo"/>
            <button
              className="hamburger lg:hidden"
              type="button"
              onClick= {() => {setNavbarOpen(!navbarOpen)}}
              >
              {!navbarOpen ? (
                <img src={iconHamburger} alt="hamburger icon" />
              ) : (
                <img src={iconClose} alt="close icon"/>
              )
              }
            </button>
        </div>
        <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")}>
          <ul className="flex flex-col lg:flex-row list-none w-full md:w-auto lg:ml-auto h-screen-nav sm:h-auto mt-8 sm:mt-0 text-sm sm:text-xs sm:uppercase sm:text-gray font-serif sm:font-sans bg-gradient-to-b from-lightCream to-white sm:bg-none">
            <NavLink to='/' className="mx-auto px-3 py-4 hover:text-darkGray">Home</NavLink>
            <NavLink to='/about' className="mx-auto px-3 py-4 hover:text-darkGray">About Us</NavLink>
            <NavLink to='/subscribe' className="mx-auto px-3 py-4 hover:text-darkGray">Create Your Plan</NavLink>
          </ul>
        </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation;
