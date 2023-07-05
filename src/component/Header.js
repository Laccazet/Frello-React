import { Link } from "react-router-dom";
import logo from "../assets/Logo.png";
import { AiFillHome, AiFillQuestionCircle } from "react-icons/ai";

export default function Header() {
  return (
    <div className="w-full h-[7%] bg-[#1D2125] flex justify-between items-center">
        <div className="w-[80px] h-full flex justify-center items-center">
            <Link to={"/"} className="flex justify-center items-center w-[40px] h-[40px]">
                <img src={logo} className="w-full" alt="logo" />
            </Link>
        </div>

        <div className="w-[180px] flex justify-evenly">
            <Link to={"/"} className="h-[30px]">
                <button><AiFillHome size={30} color="#e55f97" /></button>
            </Link>

            <Link to={"/about"} className="h-[30px]">
                <button><AiFillQuestionCircle size={30} color="#e55f97" /></button>
            </Link>
        </div>
    </div>
  )
}
