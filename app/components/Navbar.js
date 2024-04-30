"use client";
import React, { useState, Fragment } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.jpg";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import "./Navbar.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const handleLinkClick = () => {
    setIsOpen(false);
    setClick(false);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const { data: session } = useSession({});

  return (
    <div
      className="header"
      style={{
        position: "sticky",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "999",
        backgroundColor: "white",
      }}
    >
      <nav className="navbar">
        <a href="/" className="logo">
          <Image
            src={logo}
            alt="logo"
            quality={100}
            style={{ minHeight: "89px", minWidth: "220px" }}
          />
        </a>
        <div className="hamburger" onClick={handleClick}>
          <FaBars size={30} style={{ color: "black" }} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/#haas" onClick={closeMenu}>
              Housing as a Service
            </a>
            {/* <a href='#housing' onClick={closeMenu}>Housing As A Service</a> */}
          </li>
          <li className="nav-item">
            <a href="/#affordable" onClick={closeMenu}>
              Affordable Housing
            </a>
          </li>
          <li className="nav-item">
            <a href="/#rent2own" onClick={closeMenu}>
              Rent2Own
            </a>
            {/* <a href='#rent2own' onClick={closeMenu}>Rent2Own</a> */}
          </li>
          <li className="nav-item">
            <a href="/#new" onClick={closeMenu}>
              New Development
            </a>
            {/* <a href='#newDevelopment' onClick={closeMenu}>New Development</a> */}
          </li>

          <li className="nav-item">
            <a href="/#buy" onClick={closeMenu}>
              Buy
            </a>
          </li>
          <li className="nav-item">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  className={`
                                     inline-flex w-full justify-center gap-x-1.5 rounded-md   text-sm font-semibold text-black-900 
                                    
                                `}
                >
                  Tokenization
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-black-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#gold"
                          onClick={closeMenu}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-black-900 font-semibold"
                              : "text-black-700 font-semibold",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          tGLD/TSPAC Utilities Token
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#propertynft"
                          onClick={closeMenu}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-black-600 font-semibold"
                              : "text-black-600 font-semibold",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Property NFT
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/#securities"
                          onClick={closeMenu}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-black-900 font-semibold"
                              : "text-black-700 font-semibold",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          iSPAC Securities Token
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="nav-item">
            <Link href="/q&a" onClick={handleClick}>
              Q&A
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/merch" onClick={handleClick}>
              Merch
            </Link>
          </li>

          <li className="nav-item">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button
                  className={`
                                     inline-flex w-full justify-center gap-x-1.5 rounded-md   text-sm font-semibold text-black-900 
                                    
                                `}
                >
                  <Link href="/team" onClick={handleLinkClick}>
                    Team
                  </Link>
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-black-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/property888.pdf"
                          target="_blank"
                          onClick={handleLinkClick}
                          rel="noreferrer"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-black-900 font-semibold"
                              : "text-black-700 font-semibold",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          White Paper
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="nav-item-button">
            {session ? (
              <Link href="/api/auth/signout?callbackUrl=/">
                <button className="login">Logout</button>
              </Link>
            ) : (
              <Link href="/api/auth/signin">
                <button className="login">Login</button>
              </Link>
            )}
          </li>
        </ul>
      </nav>
      {/*
        {showLoginModal && ( // Render Login only if showLoginModal is true
            <Login
                showLoginModal={showLoginModal} // Pass showLoginModal as a prop
                closeModal={closeLoginModal}
            />
        )} */}
    </div>
  );
};

export default Navbar;
