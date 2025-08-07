import { Link } from "react-router"


const Navbar = () => {
return (
    <>
    <nav>
        <div className="nav_main bg-[#1A2A80] w-full h-[100px] flex justify-evenly items-center">
            <div className="logo text-4xl text-white font-Inter font-bold"><i className="fa-brands fa-web-awesome text-white">CCv-Ter</i></div>
            <div className="Menu">
                <ul className="flex gap-8 text-lg text-white font-medium ">
                <li><Link className="hover:text-blue-950" to={"/"}>Home</Link></li>
                <li><Link className="hover:text-blue-950" to={"/about"}>About</Link></li>
                <li><Link className="hover:text-blue-950" to={"/ccvter"}>CCvter</Link></li>
                <li><Link className="hover:text-blue-950" to={""}>Contact</Link></li>
                </ul>
            </div>
            </div>
        </nav>
    </>
)
}

export default Navbar
