"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown, MdAddShoppingCart } from "react-icons/md";
import { FaUser, FaHeart } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import Link from "next/link";
import MegaMenuImage from "../../../../public/Mega-Menu-1.png";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShopSubMenuOpen, setIsShopSubMenuOpen] = useState(false);
  const [isPagesSubMenuOpen, setIsPagesSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleShopMouseEnter = () => {
    setIsShopSubMenuOpen(true);
  };

  const handleShopMouseLeave = () => {
    setIsShopSubMenuOpen(false);
  };

  const handlePagesMouseEnter = () => {
    setIsPagesSubMenuOpen(true);
  };

  const handlePagesMouseLeave = () => {
    setIsPagesSubMenuOpen(false);
  };

  return (
    <>
      <header className="flex justify-center w-full">
        <nav className="flex justify-between items-center w-[95%] py-4">
          <div>
            <Link href="/" className="font-bold text-2xl ">
              StylishHim
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <ul className="flex items-center">
              <li>
                <Link
                   href="/pages/about"
                  className="mx-2 lg:mx-5 uppercase text-[14px] lg:text-base tracking-[.15em] font-medium"
                >
                  About
                </Link>
              </li>
              <li
                onMouseEnter={handleShopMouseEnter}
                onMouseLeave={handleShopMouseLeave}
                className="relative"
              >
                <Link
                  href="/pages/addtocart"
                  className="flex items-center mx-2 lg:mx-5 uppercase text-[14px] lg:text-base tracking-[.15em] font-medium"
                >
                  Shop
                  <MdKeyboardArrowDown className="text-lg mt-[2px]" />
                </Link>
                {isShopSubMenuOpen && (
                  <div
                    className="absolute flex justify-center bg-white p-4 left-1/2 transform -translate-x-1/2 shop_submenu"
                    style={{
                      width: "80vw",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                      backgroundColor: "#FCF7EE",
                      transition: "left 0.5s ease",
                    }}
                  >
                    <div className="flex" style={{ width: "100%" }}>
                      <ul
                        className="pr-5 shop_submenu_items"
                        style={{ width: "24%" }}
                      >
                        <h3 className="shop_submenu_itemheading text-xl font-bold border-b-[0.5px] border-black">
                          Face Wash
                        </h3>
                        <li className="py-2">
                          <Link href="#">Category 1</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 2</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 3</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 4</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 5</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 6</Link>
                        </li>
                      </ul>
                      <ul
                        className="pr-5 shop_submenu_items"
                        style={{ width: "24%" }}
                      >
                        <h3 className="shop_submenu_itemheading text-xl font-bold border-b-[0.5px] border-black">
                          Face Wash
                        </h3>
                        <li className="py-2">
                          <Link href="#">Category 1</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 2</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 3</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 4</Link>
                        </li>
                        <Image src={MegaMenuImage} width={250} height={100} alt="img"/>
                      </ul>
                      <ul
                        className="pr-5 shop_submenu_items"
                        style={{ width: "24%" }}
                      >
                        <h3 className="shop_submenu_itemheading text-xl font-bold border-b-[0.5px] border-black">
                          Face Wash
                        </h3>
                        <li className="py-2">
                          <Link href="#">Category 1</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 2</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 3</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 4</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 5</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 6</Link>
                        </li>
                      </ul>
                      <ul
                        className="pr-5 shop_submenu_items"
                        style={{ width: "24%" }}
                      >
                        <h3 className="shop_submenu_itemheading text-xl font-bold border-b-[0.5px] border-black">
                          Face Wash
                        </h3>
                        <li className="py-2">
                          <Link href="#">Category 1</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 2</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 3</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 4</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 5</Link>
                        </li>
                        <li className="py-2">
                          <Link href="#">Category 6</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link
                  href="#"
                  className="mx-2 lg:mx-5 uppercase text-[14px] lg:text-base tracking-[.15em] font-medium"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="mx-2 lg:mx-5 uppercase text-[14px] lg:text-base tracking-[.15em] font-medium"
                >
                  Gallery
                </Link>
              </li>
              <li
                onMouseEnter={handlePagesMouseEnter}
                onMouseLeave={handlePagesMouseLeave}
              >
                <Link
                  href="#"
                  className="flex items-center mx-2 lg:mx-5 uppercase text-[14px] lg:text-base tracking-[.15em] font-medium"
                >
                  Pages
                  <MdKeyboardArrowDown className="text-lg mt-[2px]" />
                </Link>
                {isPagesSubMenuOpen && (
                  <div
                    className="absolute bg-white p-4 pages_submenu"
                    style={{
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                      backgroundColor: "#FCF7EE",
                    }}
                  >
                    <ul className="pages_submenu_items">
                      <li className="py-2">
                        <Link href="#">Our History</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">FAQs</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
            </ul>
          </div>
          <ul className="flex items-center">
            <li>
              <Link href="/pages/register">
                <FaUser className="md:mx-3 mx-1 text-xl" />
              </Link>
            </li>
            <li>
              <Link href="/pages/facedetection" >
                <MdAddShoppingCart className="md:mx-3 mx-1 text-xl" />
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaHeart className="md:mx-3 ml-1 mr-4 text-xl" />
              </Link>
            </li>
            <li className="md:hidden mx-1">
              <Link href="#" onClick={toggleMenu}>
                <GiHamburgerMenu className="font-bold text-xl" />
              </Link>
            </li>
          </ul>
        </nav>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden fixed inset-0 bg-black bg-opacity-50 z-50`}
          onClick={toggleMenu}
        ></div>
        <div
          className={`${
            isMenuOpen ? "right-0" : "-right-full"
          } md:hidden fixed h-full overflow-auto bg-white z-50 transition-transform duration-300 ease-in-out`}
          style={{
            width: "80vw",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
          }}
        >
          <Link
            href="#"
            onClick={toggleMenu}
            className="absolute top-2 right-4"
          >
            <ImCross className="font-bold text-xl" />
          </Link>
          <ul className="flex flex-col items-start pt-8">
            <li className="py-2">
              <Link   href="/pages/about" className="mx-5">
                About
              </Link>
            </li>
            <li
              onMouseEnter={handleShopMouseEnter}
              onMouseLeave={handleShopMouseLeave}
              className="py-2"
            >
              <Link href="/pages/addtocart" className="flex items-center mx-5">
                <span>Shop</span>
                <MdKeyboardArrowDown className="text-lg mt-1" />
              </Link>
              {isShopSubMenuOpen && (
                <div
                  className="absolute bg-white p-4 w-full"
                  style={{
                    backgroundColor: "#FCF7EE",
                  }}
                >
                  <div style={{ width: "100%" }}>
                    <ul className="pr-5">
                      <h3 className="text-xl font-bold border-b-[0.5px] border-black">
                        Face Wash
                      </h3>
                      <li className="py-2">
                        <Link href="#">Category 1</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 2</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 3</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 4</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 5</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 6</Link>
                      </li>
                    </ul>
                    <ul className="pr-5">
                      <h3 className="text-xl font-bold border-b-[0.5px] border-black">
                        Face Wash
                      </h3>
                      <li className="py-2">
                        <Link href="#">Category 1</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 2</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 3</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 4</Link>
                      </li>
                      <Image src={MegaMenuImage} width={250} height={100} alt="img" />
                    </ul>
                    <ul className="pr-5">
                      <h3 className="text-xl font-bold border-b-[0.5px] border-black">
                        Face Wash
                      </h3>
                      <li className="py-2">
                        <Link href="#">Category 1</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 2</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 3</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 4</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 5</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 6</Link>
                      </li>
                    </ul>
                    <ul className="pr-5">
                      <h3 className="text-xl font-bold border-b-[0.5px] border-black">
                        Face Wash
                      </h3>
                      <li className="py-2">
                        <Link href="#">Category 1</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 2</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 3</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 4</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 5</Link>
                      </li>
                      <li className="py-2">
                        <Link href="#">Category 6</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
            <li className="py-2">
              <Link href="#" className="mx-5">
                Blog
              </Link>
            </li>
            <li className="py-2">
              <Link href="#" className="mx-5">
                Gallery
              </Link>
            </li>
            <li
              onMouseEnter={handlePagesMouseEnter}
              onMouseLeave={handlePagesMouseLeave}
              className="py-2"
            >
              <Link href="#" className="flex items-center mx-5">
                <span>Pages</span>
                <MdKeyboardArrowDown className="text-lg mt-1" />
              </Link>
              {isPagesSubMenuOpen && (
                <div
                  className="absolute bg-white p-4 w-full"
                  style={{
                    backgroundColor: "#FCF7EE",
                  }}
                >
                  <ul>
                    <li className="py-2">
                      <Link href="#">Our History</Link>
                    </li>
                    <li className="py-2">
                      <Link href="#">FAQs</Link>
                    </li>
                    <li className="py-2">
                      <Link href="#">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
