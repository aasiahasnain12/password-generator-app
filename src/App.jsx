import React, { useState } from 'react'

const App = () => {
  const [length, setLength] = useState(4);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludenumbers] = useState(false);
  const[password, setPassword] = useState("");

  const generatePassword = () =>{
  let characters ="abcdefghijklmnopqrstuvwxyz";
   if(includeUppercase)
    characters +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
   
   if(includeNumbers)
    characters +="0123456789";
    
   
   if(includeSymbols)
    characters +="!@#$%^&*()_-=[]{}<>?/|";
   
   let generatePassword="";
   for(let i=0; i<length; i++){
    const randomIndex =Math.floor(Math.random() * characters.length);
    generatePassword += characters[randomIndex];
    

   };
   setPassword(generatePassword);
   
   };
   const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied!");
  };
  
   

  
  return (
    <div className='bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 
    h-screen w-screen flex justify-center items-center  text-white'>
     <div className='bg-white/20 min-w-[450px] min-h-[350px] 
     flex items-center flex-col rounded-2xl'>
      <h1 className='pt-4 text-2xl font-bold'>🔐 Password Generator</h1>
      <div className='bg-white/30 h-12 w-[90%] mt-7 rounded-md pl-4 pt-2'>
       {password || "click generate to create a password"}
      </div>
      <div>
        <p className='mt-4 mb-2'>Length: {length}</p>
        <input type="range" min="4" max="20" value={length} onChange={(e)=>setLength(e.target.value)} className='w-[400px]' />
      </div>
      <div className=' mb-6 w-[90%]'>
        <label className='flex justify-start '>
        <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)}/>
        <p className='pl-4'>Include Uppercase (A-Z)</p>
        </label>
        <label className='flex justify-start '>
        <input type="checkbox" checked={includeNumbers} onChange={() => setIncludenumbers(!includeNumbers)} />
        <p className='pl-4'>Include Numbers (0-9)</p>
        </label>
        <label className='flex justify-start '>
        <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)}/>
        <p className='pl-4'>Include symbols (@#$)</p>
        </label>
      
      </div>
      {/* button data */}
      <div className='w-[90%] flex justify-between'>
        <button onClick={generatePassword} className='font-bold hover:scale-105 active:scale-95 transition duration-300 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 w-[80%] bg-gray-400 h-10 rounded-lg'>
          Generate</button>
        <button onClick={copyPassword} className='font-bold hover:bg-white/60 bg-white/40 h-10 w-[17%] hover:scale-105 transition duration-300 rounded-lg'>
          Copy</button>
      </div>




     </div>
    </div>
  )
}

export default App

