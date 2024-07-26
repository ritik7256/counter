

import { useState } from 'react'
import './App.css'
  function App(){
      
    const [name,setName]=useState("your name");
    const [age,setAge]=useState(0);
    const [isEmployed,setisEmployed]=useState(false);


      const updateName=()=>{
        setName("sudama");
        
      }
      const updateAge = () => {
         
        setAge((prev)=>prev+4)
      };
      
      const toggleEmployedStatus=()=>{
          
        setisEmployed(!isEmployed);

      }
      

    return(
      <>

         <p> Name:{name}  </p>
         <button onClick={updateName}>  set name </button>

         <p> Age:{age}  </p>
         <button onClick={updateAge}>  set age </button>

         <p> Is Employed:{isEmployed ? "yes":"no"}  </p>
         <button onClick={toggleEmployedStatus}> toggle status </button>
      </>
    )



  }


export default App
