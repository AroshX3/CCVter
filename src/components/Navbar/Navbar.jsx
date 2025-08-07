

const Navbar = () => {
return (
    <>
    <nav>
        <div className="nav_main bg-[#1A2A80] w-full h-[100px] flex justify-evenly items-center">
            <div className="logo text-4xl text-white font-Inter font-bold"><i className="fa-brands fa-web-awesome text-white">CCv-Ter</i></div>
            <div className="Menu">
                <ul className="flex gap-8 text-lg text-white font-medium ">
                <li><a className="hover:text-blue-950" href="/">Home</a></li>
                <li><a className="hover:text-blue-950" href="/about">About</a></li>
                <li><a className="hover:text-blue-950" href="/ccvter">CCvter</a></li>
                <li><a className="hover:text-blue-950" href="">Contact</a></li>
                </ul>
            </div>
            </div>
        </nav>
    </>
)
}

export default Navbar
