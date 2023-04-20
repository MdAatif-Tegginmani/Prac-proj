import React from 'react'
import Navbar from '../Main/Navbar'
import './Home.css'
import { getAuth, signOut } from "firebase/auth";

import { useNavigate } from 'react-router-dom'


export default function Home() {

  const auth = getAuth();
  const navigate =useNavigate()
  
  const userLogout =()=>{
    signOut(auth).then(() => {
        navigate('/login')
    }).catch((error) => {
      console.log(error)
      // An error happened.
    });
  }
  











  return (




  
    <div >
    
    <Navbar/>

    <div className="btn-menu">
    <button  onClick={userLogout} className="logbtn">Logout</button>
    </div>
    
    
    </div>
      

      )
    }


      
    
      
      
      

      
      
      
      


      
      
      
    
    
      // {props.name ? (
      //   <h2>Welcome, {props.name}!</h2>
      //     ) : (
      //   <div>
      //     <ClipLoader
      //       color={color}
      //       loading={loading}
      //       cssOverride={override}
      //       size={150}
      //       aria-label="Loading Spinner"
      //       data-testid="loader"
      //     />
      //     <p>Loading...</p>
      //   </div>
      // )}