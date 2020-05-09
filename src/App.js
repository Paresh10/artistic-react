import React, { useState } from 'react';
import './App.css';
import LoginSignUpForm from './LoginSignUpForm'


export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedInUserEmail, setLoggedInUserEmail] = useState('')

  const signup = async (signupInfo) => {
    const url = process.env.REACT_APP_API_URL + "/users"

    try {
      const signupResponse = await fetch(url, {
        credentials: 'include',
        metthod: 'POST',
        body: JSON.stringify(signupInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const signupJson = await signupResponse.json()

      if (signupResponse.status === 201) {
        setLoggedIn(true)
        setLoggedInUserEmail(signupJson.email)
      }
    }
    catch (err) {
      console.error(err)
    }
  }



  return (
    <div className="App">
    <LoginSignUpForm />
    </div>
  );
}


