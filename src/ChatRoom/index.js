import React, { useState, useEffect } from 'react' 
import './index.css'
import { Form, Button, Image, Grid, Comment } from 'semantic-ui-react'

// Socket.io chat imports
import io from 'socket.io-client'
import TextField from '@material-ui/core/TextField'

// Setup connection request
const socket = io.connect('http://localhost:3000')



export default function ChatRoom({userProfile}) {
  // Setup socket.io messsage state
  const [chatMessage, setChatMessage] = useState({
    message: '',
    name: userProfile.name
  })
  const [chat, setChat] = useState([])


// Render Chat messages
const renderChat = () => {
	return chat.map(({ name, message }, index) => (
			<Comment key={index}>
				<Comment.Avatar />
				<Comment.Content>
					{name}: <span>{message}</span>
				</Comment.Content>
			</Comment>


	))
}

useEffect(() => {
	socket.on('message', ({ name, message }) => {
		setChat([...chat, {name, message }])
	})
})

const handleChange = (event) => {

	setChatMessage({
		...chatMessage, [event.target.name]: event.target.value
	})
}

const handleSubmit = (event) => {

	event.preventDefault()
	const {name, message} = chatMessage
	socket.emit('message', { name, message })
	setChatMessage({ 
		message: '', name
	})

}

	return(
		<Grid relaxed='very' stackable inverted textAlign='center' style={{ height: '50vh', marginTop: '0px',}} verticalAlign='middle'>
			<div className="chatCard">
			<Form classname="form"onSubmit={handleSubmit}
			style={{backgroundColor: '#816687', color: 'white'}}>
				<h1> Let's chat! </h1>

				<div className="name-field">
					<TextField
						onChange={(event) => {handleChange(event)}}
						value={chatMessage.name}
						/>
				</div>

				<div>
					<TextField 
						name='message'
						onChange={(event) => {handleChange	(event)}}
						value={chatMessage.message}
						id="outlined-multiline-static"
						variant="outlined"
						label="Message"
						/>
				</div>	
				<Button style={{ marginTop: '10px' }}
				      color='green'
				      content='Send'
				      label={{basic: true, color: 'red', pointing: 'left', content: 'Message' }}>
				 Send 
				 </Button>			
			</Form>
			<div className='render-chat' style={{color: '#816687'}}>
				<h1> Messages </h1>
				{renderChat()}
			</div>	
		</div>
	</Grid>	
	)
}
