import { ReactDOM } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "../../styles";
import { navVariants } from "../../utils/motion";
import Headers from '../Header/Header'
import About from "../About/About";
import Explore from "../../Explore/Explore";
import Hero from '../Hero/Hero'

function Header(props) {
  const navigate = useNavigate();

  function handleClick(e) {
    e.preventDefault();
    console.log("you have clicked get started");
  }

  const logoutHandler = () => {
    localStorage.clear();
    // props.loginStatus(false);
    navigate("/");
  };

  const goToLogin = () => {
    document.getElementById('loginForm').scrollIntoView({
      behavior: 'smooth'
    })
    // navigate("/login")
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        {/* <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      /> */}
        <a href="http://127.0.0.1:5173/" className="flex items-center">
          <img src="./logoforHealthTales.png" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">HealthTales</span>
        </a>
        {/* <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        HealthTales
      </h2> */}
        {/* <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      /> */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-3 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-transparent-800 md:dark:bg-transparent-900 dark:border-transparent-700">

            {/* <li><Link to="/home" className="block py-2 pl-3 pr-4 text-white md:bg-transparent font-extrabold text-[15px] leading-[8.24px] text-white md:p-0">Home</Link></li>
            <li><Link to="/about" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent font-extrabold text-[15px] leading-[8.24px] text-white md:p-0">About</Link></li> */}

            <li><Link to="/profile" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent font-extrabold text-[15px] leading-[8.24px] text-white md:p-0">Profile</Link></li>

            {
              localStorage.getItem('abc') ? <li><button onClick={logoutHandler} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent font-extrabold text-[15px] leading-[8.24px] text-white md:p-0">Logout</button></li> :
                <li><button onClick={goToLogin} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent font-extrabold text-[15px] leading-[8.24px] text-white md:p-0">Login</button></li>
            }

          </ul>
        </div>
      </div>
      {/* <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div> */}
    </motion.nav>
  );
}

export default Header;
