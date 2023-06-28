import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "../component/Header"
import NotFound from "./NotFound"
import About from "./About"
import Tables from "./Tables"
import Lists from "./Lists"

export default function App() {
  return (
    <div className="w-full h-full bg-slate-800 flex flex-col justify-center items-center">
        <BrowserRouter>
            <Header />
            <div className="h-[90%] flex justify-center items-center">
              <Routes>
                  <Route exact path="/*" element={<NotFound />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/" element={<Tables />} />
                  <Route exact path="/table/:lists" element={<Lists />} />
               </Routes>
            </div>
        </BrowserRouter>
    </div>
  )
}
