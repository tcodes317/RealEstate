import {FaSearch, FaAlignRight} from "react-icons/fa";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Header(){
    return(
        <>
            <header className="xs:relative xs:px-4 md:py-4">
                <div className="xl:justify-evenly xs:flex xs:flex-row xs:items-center xs:justify-between">
                    <Link to="/">
                        <div className="xs:flex xs:py-4">
                            <span className="xs:text-slate-500 xl:text-3xl xs:block xs:text-2xl">Sahad</span>
                            <span className="xs:font-bold xs:block xl:text-3xl xs:text-2xl">Estate</span>
                        </div>
                    </Link>
                    <div className="md:border-2 md:w-5/12 md:px-2 md:pr-4">
                        <form action="" method="POST" className="xs:flex xs:items-center xs:px-4 md:px-0">
                            <input type="search" placeholder="Search ..." className="md:w-full md:block focus:outline-none md:sticky xs:absolute xs:hidden xs:top-14 xs:left-0 xs:p-2 xs:border-2 md:border-none xs:w-full"/>
                            <FaSearch className="xs:hidden md:block"/>
                        </form>
                    </div>
                    <div className="xs:flex xs:items-center xs:space-x-7 ">
                        <FaSearch className="xs:text-xl md:hidden" />
                        <FaAlignRight className="xs:text-xl md:hidden" />
                        <ul className="md:flex md:space-x-4 xl:text-xl xl:space-x-8">
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <Link to="/gallery">
                                <li>Gallery</li>
                            </Link>
                            <Link to="/about">
                                <li>About</li>
                            </Link>
                            <Link to="/">
                                <li>Sign In</li>
                            </Link>
                            
                        </ul>
                    </div>
                </div>
            </header>
            <Nav />
        </>
    )
}
export default Header