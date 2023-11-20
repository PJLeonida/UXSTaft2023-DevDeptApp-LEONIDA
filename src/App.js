import './App.css';
import { Button } from './Button'
import { useState } from 'react'


function App() {
  const [newResponse, setNewResponse] = useState("");
  
  const fetchFact = async () => {
    try {
      const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
      const api = await response.json();
      console.log(api.text);
      setNewResponse(api.text);
    } catch (error) {
      console.log(error);
    }
  }
  
  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const api = await response.json();
      console.log(api.slip.advice);
      setNewResponse(api.slip.advice);
    } catch (error) {
      console.log(error);
    }
  }

  const link = () => {
    window.location.href = 'https://bit.ly/3yr8uaT'; // U can search it, but where's the fun in that. Try spamming "I'm feeling lucky!"
  }
  
  const funcArray = [fetchFact, fetchAdvice, fetchFact, fetchAdvice, fetchFact, fetchAdvice, link]

  const randFetch = () => {
    const randomIndex = Math.floor(Math.random() * funcArray.length)
    funcArray[randomIndex]();
  }
  
  return (
    <>
    <div className="bg-primary h-screen font-bq flex items-center flex-col">
        <p className='text-white shadow-slate-400 text-center text-[6rem] p-8 m-6'> Welcome to my Webpage!</p>
        <div className='w-screen h-screen mt-20 rounded-lg bg-secondary flex flex-col shadow-slate-300 items-center'>
          <p className=' text-tertiary px-4 mt-8 content-center text-center text-mono text-[2.5rem]'>{newResponse.toString()}</p>
            <p className='text-gray-300 font-bold mt-8'>_____________________________________________</p>
            <p className='text-[2.2rem] mt-2 text-gray-300'>Choose a prompt</p>
            <div  className='text-xl justify-self-end my-2 flex flex-col'> 
              <Button onClick={fetchAdvice} text='ADVICE'/>
              <Button onClick={fetchFact} text='RANDOM FACTS'/>
            </div>
              <Button onClick={randFetch} text="I'm feeling lucky!"/>
        </div>
    </div>
    </>
  );
}



export default App;
