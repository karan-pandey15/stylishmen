import Link from "next/link";
import { MdOutlineLocationOn } from "react-icons/md";
import {
    AiFillPhone,
    AiOutlineMail,
    AiFillFacebook,
    AiFillYoutube,
} from "react-icons/ai";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { BsInstagram } from "react-icons/bs";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./footerstyle.css";

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#FCF7EE"}}>
            <div >
                <footer className="footer_container">
                    <div className="footer_heading_container">
                        <div className="">
                            <h1 className="footer_main_heading">STYLISHHIM</h1>
                            <p className="footer_main_para">Sed viverra tellus in hac habitasse platea dictumst vestibulum. Mauris augue neque gravida in. In cursus turpis massa tincidunt.</p>
                        </div>
                    </div>




                    <div className="link_container">
                        <h5
                            style={{
                                color: "#111",
                                fontSize: "24px",
                                fontWeight: "600",
                            }}
                        >
                            About
                        </h5>
                        <ul className="ul_link">
                            <li className="">
                                <Link
                                    href="#"
                                    className=""
                                >
                                    Career
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    href="#"
                                    className=""
                                >
                                    Stockists
                                </Link>
                            </li>
                            <li className=" ">
                                <Link
                                    href="#"
                                    className=" "
                                >
                                    Shop Locator
                                </Link>
                            </li>
                            <li className=" ">
                                <Link
                                    href="#"
                                    className=""
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="link_container">
                        <h5
                            style={{
                                color: "#111",
                                fontSize: "24px",
                                fontWeight: "600",
                            }}
                        >
                            Help
                        </h5>
                        <ul className="ul_link">
                            <li className="">
                                <Link
                                    href="#"
                                    className=""
                                >
                                    Shipping & Returns
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    href="#"
                                    className=""
                                >
                                    Track Order
                                </Link>
                            </li>
                            <li className=" ">
                                <Link
                                    href="#"
                                    className=" "
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li className=" ">
                                <Link
                                    href="#"
                                    className=""
                                >
                                    Product Returns
                                </Link>

                            </li>
                            <li className=" ">
                                <Link
                                    href="/pages/productregister"
                                    className=""
                                >
                                    List Products
                                </Link>

                            </li>

                        </ul>
                    </div>


                    <div className="link_container">
                        <h5
                            style={{
                                color: "#111",
                                fontSize: "24px",
                                fontWeight: "600",
                            }}
                        >
                            Information
                        </h5>
                        <ul className="ul_link">
                            <li className="">

                                <Link
                                    href="#"
                                    className=""
                                >
                                     Store Information
                                </Link>
                            </li>


                            <li className="">

                                <Link
                                    href="#"
                                    className=""
                                >
                                    About Store
                                </Link>
                            </li>
                            <li className="">
                                <Link
                                    href="#"
                                    className=""
                                >
                                    Latest Products
                                </Link>
                            </li>
                            <li className=" ">
                                <Link
                                    href="#"
                                    className=" "
                                >
                                    New Discounts
                                </Link>
                            </li>
                            <li className=" ">
                                <Link
                                    href="#"
                                    className=""
                                >
                                    Sale Products
                                </Link>

                            </li>

                        </ul>
                    </div>






                    <div className="footer_input_container">
                        <div className="">
                            <h1 className="footer_input_heading">Newsletter</h1>
                            <p className="footer_input_para">Signup for our newsletter to stay up to date on sales and events.</p>
                            <input placeholder="Email Address" className="footer_input"/>
                        </div>
                    </div>




                    {/* <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p
              className="text-black"
              style={{ fontSize: "18px", fontWeight: 500 }}
            >
              © 2023{" "}
              <Link
                style={{
                  textDecoration: "none",
                  fontSize: "20px",
                  fontWeight: 500,
                }}
                href={"https://addrupee.com"}
              >
                AddRupee
              </Link>{" "}
              , Inc. All rights reserved.
            </p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3">
                <Link
                  className="link-black fs-2"
                  href="https://www.youtube.com/channel/UCTSA6p0niTmhK1yaK2qDwPA"
                >
                  <AiFillYoutube />
                </Link>
              </li>
              <li className="ms-3">
                <Link
                  className="link-black fs-2 "
                  href="https://www.instagram.com/addrupeefinance/"
                >
                  <BsInstagram />
                </Link>
              </li>
              <li className="ms-3">
                <Link
                  className="link-black fs-2 "
                  href="https://www.facebook.com/people/Add-Rupee/100083152737651/?is_tour_dismissed=true"
                >
                  <AiFillFacebook />
                </Link>
              </li>
            </ul>
          </div> */}
                </footer>
            </div>
        </div>
    );
};

export default Footer;