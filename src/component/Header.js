import { Link } from "react-router-dom"

export default function Header() {
  return (
    <div className="w-full h-[10%] bg-slate-600 flex justify-between items-center">
        <div className="w-[180px] flex justify-center items-center">
            <Link to={"/"}>
                <h1 className="font-bold text-[40px]">Frello</h1>
            </Link>
        </div>

        <div className="w-[180px] flex justify-evenly">
            <Link to={"/"}>
                <button>Home</button>
            </Link>

            <Link to={"/about"}>
                <button>About</button>
            </Link>
        </div>
    </div>
  )
}
