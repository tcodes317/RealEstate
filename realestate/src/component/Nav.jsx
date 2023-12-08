import { FaTimes } from "react-icons/fa";
import {Link} from "react-router-dom"

function Nav(){
    return(
        <>
        {/* change the hidden like a toggle effect */}
            <div id="nav" className="hidden md:hidden xs:w-full xs:h-screen bg-black xs:absolute xs:z-10">
                <FaTimes className="xxs:left-20 xs:absolute xs:text-3xl xs:left-14 xs:top-2 hover:text-red-500"/>
                <div className="xs:bg-white xs:w-8/12 xs:absolute xs:right-0 xs:h-screen">
                    <ul className="xs:text-left">
                        <Link to="/">
                            <li className="xs:p-4 xs:hover:bg-slate-500 hover:text-white hover:transition-all">Home</li>
                        </Link>
                        <Link to="/">
                            <li className="xs:p-4 xs:hover:bg-slate-500 hover:text-white hover:transition-all">About</li>
                        </Link>
                        <Link to="/">
                            <li className="xs:p-4 xs:hover:bg-slate-500 hover:text-white hover:transition-all">Sign in</li>
                        </Link>
                        <Link to="/">
                            <li className="xs:p-4 xs:hover:bg-slate-500 hover:text-white hover:transition-all">Sign out</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Nav;