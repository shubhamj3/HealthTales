import { useState } from 'react'
import ChatBody from './components/AdvisoryBot/ChatBody'
import ChatInput from './components/AdvisoryBot/ChatInput'
import { useMutation } from 'react-query'
import { fetchResponse } from './components/ServerCalls/api'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home'
import About from './components/About/About'
import Profile from './components/AdvisoryBot/Profile'
import Login from './components/Login/Login'
import Registration from './components/Registration/Registration'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Explore from './Explore/Explore'
import BuddyProfile from './components/BuddyBot/BuddyProfile'
function App() {

  // const [chat, setChat] = useState([])

  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetchResponse(chat)
  //   }, 
  //   onSuccess: (data) => setChat((prev) => [...prev, {sender: 'ai', message: data.message.
  //   replace(/^\n\n/, "")}])
  // })

  // const sendMessage = async (message) => {
  //   await Promise.resolve(setChat((prev) => [...prev, message]))
  //   mutation.mutate();
  // }

  const [status, setStatus] = useState(false);

  function loginStatusFunction(stat) {
    setStatus(stat);
  }


  return (
    <Router>
      {/* // Parent Div */}
      <div className='bg-primary-black overflow-hidden bg-[#1A232E]'>
        {/* gradients */}
        {/* <div className="gradient-01 z-0 absolute"></div>
      <div className="gradient-02 z-0 absolute"></div> */}
        {/* <Header loginStatus={status} />
        <Hero />
        <div className="relative">
          <About />
          <div className="gradient-03 z-0" />
          <Explore />
        </div> */}
        <Routes>

          <Route path="/" element={(
            <>
              <Header loginStatus={status} />
              <Hero />
              <div className="relative">
                <About />
                <div className="gradient-03 z-0" />
                <Explore />
              </div>

            </>
          )} />


          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* {
            localStorage.getItem('token') && <Route path="/profile" element={<Profile />} />
          } */}
          <Route path="/profile" element={localStorage.getItem('token') || status ? <Profile /> : <Navigate replace to="/login" />} />
          <Route path="/buddyProfile" element={localStorage.getItem('token') || status ? <BuddyProfile /> : <Navigate replace to="/login" />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login loginStatus={loginStatusFunction} />} />
        </Routes>
        <Footer loginStatus={loginStatusFunction} />
        {/* header */}
        {/* <div className='sentencecase font-bold text-2xl text-center'>HealthTales</div> */}

        {/* body */}
        {/* <div className='h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center'>
        <ChatBody chat={chat} />
      </div> */}

        {/* input */}
        {/* <div className='w-full max-w-4xl min-w-[20rem] self-center'>
        <ChatInput sendMessage={sendMessage} loading={mutation.isLoading} />
      </div> */}

      </div>
    </Router>
  )
}

export default App
