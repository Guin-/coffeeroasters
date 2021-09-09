import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/shared/desktop/logo.svg';
import iconHamburger from '../assets/shared/mobile/icon-hamburger.svg';
import iconClose from '../assets/shared/mobile/icon-close.svg';

function Navigation () {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="w-full flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img src={logo} classname="inline-block mr-4 py-2" alt="logo"/>
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
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <NavLink to='/' className="flex items-center px-3 py-2">Home</NavLink>
            <NavLink to='/about' className="flex items-center px-3 py-2">About us</NavLink>
            <NavLink to='/subscribe' className="flex items-center px-3 py-2">Create your plan</NavLink>
          </ul>
        </div>
        </div>
      </nav>
    </>
  )
}

export default Navigation;
