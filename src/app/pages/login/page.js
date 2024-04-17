import Image from "next/image";
import firstImg from "../../../../public/registerImg.png";
import Link from "next/link";
import "./loginpagestle.css";
import Navbar from "@/app/components/navbar/page";

const LoginPage = () => {


  return (
    <>
    <Navbar />
    <div style={{backgroundColor:'#FCF7EE'}} >
      <h1 className="register_heading" >Login Now</h1>
    <div className="register_main_container">
      <div className="register_child_container" >
          <div className="register_first_container" >
            <Image src={firstImg} className="registerImg" alt="registerImg" />
          </div>
          <div className="register_formcontainer" >
             <form  >
                <input className="form_input" placeholder="Your Email Adress" />
                <input className="form_input" placeholder="Your Password" />
                <button className="form_button" >Login</button>
                {/* <span className="form_para" >didn't have an account</span>
                <span style={{color:"blue",borderBottom:'1px solid blue'}} >
                <Link href="/pages/register">Sign Up</Link>
                  </span>  */}

             </form>
          </div>
              
      </div>
    </div>
    </div>
    </>
  );
};

export default LoginPage;
