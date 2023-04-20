import React, { useState } from 'react'
import styles from './Signup.module.css'

import { Link,useNavigate } from 'react-router-dom'

import InputControls from '../InputControls/InputControls'
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';


export default function Signup() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
    });


    const [errorMsg, setErrorMsg] = useState("")


    const [submitbuttonDisabled,setSubmitButtonDisabled]=useState(false)


    const handleSubmit = () => {
        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill all fields")
            return
        }
        setErrorMsg("")
        

        setSubmitButtonDisabled(true)
        createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async(res) => {
                setSubmitButtonDisabled(false)
                const user= res.user 
               await updateProfile(user,{
                    displayName: values.name ,
                })   
                navigate("/login")
            })
            
            .catch((err) =>{
                
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message)
            })
    }



    return (
        <div className={styles.container}>

            <div className={styles.innerBox}>

                <h1 className={styles.heading}>Sign Up</h1>


                <InputControls label="Name" placeholder="Enter your name" onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))} />
                <InputControls label="Email" placeholder="Enter email address" onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))} />
                <InputControls label="Password" placeholder="Enter Password" onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))} />

                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button onClick={handleSubmit} disabled={submitbuttonDisabled} >Signup</button>
                    <p>
                        Already have an account?{" "}
                        <span>
                            <Link to="/login" >Login</Link>
                        </span>

                    </p>


                </div>



            </div>




        </div>
    )
}
