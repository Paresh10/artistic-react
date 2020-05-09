import React, { useState } from 'react';
import './App.css';
import LoginSignUpForm from './LoginSignUpForm'
import MainContainer from './MainContainer'


export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedInUserEmail, setLoggedInUserEmail] = useState('')


// Sign up route
  const signup = async (signupInfo) => {
    const url = process.env.REACT_APP_API_URL + "/auth/signup"

    try {
      const signupResponse = await fetch(url, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify(signupInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const signupJson = await signupResponse.json()

      console.log("signupJson.data")
      console.log(signupJson.data)

      if (signupResponse.status === 200) {
        setLoggedIn(true)
        setLoggedInUserEmail(signupJson.data.email)
      }
    }
    catch (err) {
      console.error(err)
    }
  }



// Login route
const login = async (loginInfo) => {
  const url = process.env.REACT_APP_API_URL + "/auth/login"

  try {
    const loginResponse = await fetch(url, {
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(loginInfo),
      headers: {
        'Content-Type': 'application/json' 
      }
    })
    const loginJson = await loginResponse.json()

        console.log("loginJson")
        console.log(loginJson)

    if (loginResponse.status === 200) {
      setLoggedIn(true)
      setLoggedInUserEmail(loginJson.data.email)
    }
    console.log("loginJson.data.email")
    console.log(loginJson.data.email)
  }
  catch(err) {
    console.error(err)
  }
}


// Logout route
const logout = async () => {
  try {
    const url = process.env.REACT_APP_API_URL + "/auth/logout"

    const logoutResponse = await fetch(url, {
      credentials: 'include'
    })
    const logoutJson = await logoutResponse.json()


    if (logoutResponse.status === 200) {
      setLoggedIn(false)
      setLoggedInUserEmail('')
    }
  }
  catch (err) {
    console.error(err)
  }
}


  return (
    <div className="App">
    {
      loggedIn === true
      ?
      <MainContainer />
      :
    <LoginSignUpForm 
    login={login}
    signup={signup}
    />
  }
    </div>
  );
}


