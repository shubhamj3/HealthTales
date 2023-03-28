import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handleLogin = () => {

        const data = {
            "email": email,
            "password": password
        }

        axios.post("http://localhost:1010/login", data)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data)
                localStorage.setItem('email', email)
            })
        // props.loginStatus(true)
        localStorage.setItem("abc", "yes");
        navigate("/")
    }
    return (
        // <div>
        //     <label>
        //         Username: {' '}
        //         <input type="text" onChange={e=>setUser(e.target.value)}/>
        //     </label>
        //     <button onClick={handleLogin}>
        //         Login
        //     </button>
        // </div>
        <div id="loginForm" className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring ring-2 ring-blue-600 lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase decoration-wavy">
                    Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                            onClick={handleLogin}>
                            Login
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    {/* <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a> */}
                    <Link to="/registration" className="font-medium text-purple-600 hover:underline">Sign up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;