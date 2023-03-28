import { useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { fetchResponse } from '../ServerCalls/api'
import ChatBody from './ChatBody'
import ChatInput from './ChatInput'
import { useNavigate } from 'react-router-dom'
import "./profile.css";
import { motion } from 'framer-motion'
// import { TitleText } from '../CustomTexts'
import { textVariant2 } from '../../utils/motion';

function BuddyProfile() {
  const [chat, setChat] = useState([])
  const [initialChat, setInitialChat] = useState([])
  const [initChat, setInitChat] = useState(false)
  let count = true;


  const buddyMagic = "I want you to act as a mental health adviser. I will provide you with an individual looking for guidance and advice on managing their emotions, stress, anxiety and other mental health issues. The details are below: " + /^\n\n/

  // Appending all the prompts responses into chat.
  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chat)
    },
    onSuccess: (data) => setChat((prev) => [...prev, {
      sender: 'ai', message: data.message.
        replace(/^\n\n/, "")
    }])
  })

  // Appending all the prompts into chat. 
  const sendMessage = async (message) => {
    setInitChat(true)
    await Promise.resolve(setChat((prev) => [...prev, message]))
    console.log("In sendMessage", chat)
    mutation.mutate();
  }

  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/')
  }

  console.log("OUTSIDE :", chat)

  let messag = [{ sender: "user", message: buddyMagic }];

  const fetchSummarized = () => {
    console.log("In Backend++++++++");
    let email = localStorage.getItem('email')
    const url = 'http://localhost:1010/getSummarizedDataAdvisoryBot/' + email;
    fetch(url, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.text())
      .then(data => { messag[0].message = buddyMagic + data })
      .catch((e) => {
        messag[0].message = "Hi, I am Shubham."
      })
    console.log("MESSAGE", messag)
  }

  useEffect(() => {

    async function fetchMyAPI() {
      if (localStorage.getItem('initialRes') == null) {
        if (count) {
          console.log("In use Effect")
          fetchSummarized();
          // messag = [{ sender: "user", message: "Hi, I am Javeed." }];
          setInitialChat(messag)
          // let res = await fetchResponse(messag);
          // console.log(res)
          const response = await fetch('http://localhost:3094', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              message: messag.map((message) => message.message).join("\n")
            })
          })
          const data = await response.json()
          console.log("From API.js", data.message)

          localStorage.setItem('initialRes', data.message)
          localStorage.setItem('initialReq', messag.map((m) => m.message))



          setChat((prev) => [...prev, messag[0]])
          console.log("Prompt", chat)

          setChat((prev) => [...prev, {
            sender: 'ai', data: data.message.
              replace(/^\n\n/, "")
          }])
          console.log("Response", chat)
          console.log("From Chat", chat)
          count = false;
          console.log("Count", count)
        }
      } else {
        setChat((prev) => [...prev, {
          sender: "user", message: localStorage.getItem('initialReq')
        }])
        console.log("Prompt", chat)

        setChat((prev) => [...prev, {
          sender: 'ai', message: localStorage.getItem('initialRes').
            replace(/^\n\n/, "")
        }])
        console.log("Im in else")
      }

    }

    fetchMyAPI()
  }, [])

  const TitleText = ({ title, textStyles }) => (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`font-bold md:text-[40px] text-[40px] text-white ${textStyles}`}
    >
      {title}
    </motion.h2>
  );

  return (
    <div className='bg-[#1A232E] h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between align-middle'>
      <div className='pt-6'>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
      <TitleText
        title={<>Buddy Bot <br className="md:block hidden" /></>}
        textStyles="text-center"
      />
      {/* <div className="text-center">
        Advisory Bot
      </div> */}
      <div className='h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center'>
        {initChat && <ChatBody chat={chat} />}
      </div>

      <div className='w-full max-w-4xl min-w-[20rem] self-center'>
        <ChatInput sendMessage={sendMessage} loading={mutation.isLoading} />
      </div>

      {/* <h1>this is profile</h1> */}
    </div>
  );
}

export default BuddyProfile;