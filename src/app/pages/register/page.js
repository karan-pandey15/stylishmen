import Image from "next/image";
import firstImg from "../../../../public/registerImg.png";
import Link from "next/link";
import "./Register.css";
import Navbar from "@/app/components/navbar/page";

const RegisterPage = () => {


  return (
    <>
    <Navbar />
    <div style={{backgroundColor:'#FCF7EE'}} >
      <h1 className="register_heading" >SignUp Now</h1>
    <div className="register_main_container">
      <div className="register_child_container" >
          <div className="register_first_container" >
            <Image src={firstImg} className="registerImg" alt="registerImg" />
          </div>
          <div className="register_formcontainer" >
             <form  >
                <input className="form_input" placeholder="Your FullName" />
                <input className="form_input" placeholder="Your Email Adress" />
                <input className="form_input" placeholder="Your Password" />
                <button className="form_button" >SignUp</button>
                <p className="form_para" >Already have an account <span style={{color:"blue",borderBottom:'1px solid blue'}} ><Link href="/pages/login">LogIn</Link></span> </p>
             </form>
          </div>
              
      </div>
    </div>
    </div>
    </>
  );
};

export default RegisterPage;

