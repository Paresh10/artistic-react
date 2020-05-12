import React, { useState } from 'react';
import './App.css';
import LoginSignUpForm from './LoginSignUpForm'
import MainContainer from './MainContainer'
import { Button } from 'semantic-ui-react'



export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [loggedInUserEmail, setLoggedInUserEmail] = useState('')
  const [loggedInUserId, setLoggedInUserId] = useState(null)
  const [message, setMessage] = useState('')
  const [buttonClick, setButtonClick] = useState('')
  const [userProfile, setUserProfile] = useState({
    profilePicture: ''
  })
  const [users, setUsers] = useState([])


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
        setMessage(signupJson.data.name)
      }
    else {
      setLoggedIn(false)
      setMessage(`Email already taken`)
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


      setUsers([...users, loginJson.data])
      setLoggedIn(true)
      setLoggedInUserEmail(loginJson.data.email)
      setLoggedInUserId(loginJson.data._id)
      setMessage(loginJson.data.name)

      setUserProfile(loginJson.data)


    }

    else {
      setLoggedIn(false)
      setMessage(`Username or Password is invalid`)
    }

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
      setMessage('')
    }
  }
  catch (err) {
    console.error(err)
  }
}


const deleteUser = async () => {

  try {
    const url = process.env.REACT_APP_API_URL + '/users/' + loggedInUserId
  
    console.log("url")
    console.log(url)
    
    const deleteUserResponse = await fetch(url, {
      credentials: 'include',
      method: 'DELETE'
    })

    if (deleteUserResponse.status === 200) {
      setUsers(users.filter(user => user._id !== loggedInUserId))
      setLoggedIn(false)
      setMessage('')
    }
  }


  catch (err) {
    console.error(err)
  }
}

// SetAction here
const setStatus = () => setButtonClick('New Action')



    /* <Button
        onClick={() => setButtonClick("ViewProfile")}
        > View Profile
    </Button> */

  return (
    <React.Fragment>
    <button
    onClick={logout}
    >
      Logout
    </button>


    {
      loggedIn === true
      ?
         <div>
      <MainContainer
      setUserProfile={setUserProfile}
      userProfile={userProfile}
      buttonClick={buttonClick}
      loggedIn={loggedIn}
      message={message} 
      loggedInUserId={loggedInUserId}
      deleteUser={deleteUser}
      />
   

      </div>
      :
      <LoginSignUpForm
      message={message} 
      login={login}
      signup={signup}
      />
  }
    </React.Fragment>
  );
}


