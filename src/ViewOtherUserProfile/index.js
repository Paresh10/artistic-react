import React, { useState  } from 'react'
import { Modal, Button, Image, Header, Icon } from 'semantic-ui-react'

	

export default function ViewOtherUserProfile
({posts,createFriendRequest, setRequests, userProfile, requests, showOtherUsersProfile}) 
{

const [findUsersPost, setFindUsersPost] = useState(posts)
const [idOfOtherUser, setIdOfOtherUser] = useState(-1)

const [requestSentStatus, setRequestSentStatus] = useState('NotSent')

const [state, setState] = useState({
	open: false
})


const openModal = () => setState({
	open: true
})

const closeModal = () => setState({
	open: false
})





// const condtionalRendering = userProfile.pendingRequest.map((userSendingRequestId) => {

// })


return(
		<Modal 
		closeIcon={true} 
		trigger={<Button
		style={{ backgroundColor: '#816687', color: 'white', margin: '10px'}}> 
		{showOtherUsersProfile.name}'s Profile
		</Button>} 		
		>

		<Modal.Header style={{ color: '#816687' }}>
			{showOtherUsersProfile.name}
		</Modal.Header>

		<Modal.Content image>
		  <Image wrapped size='medium' src={showOtherUsersProfile.profilePicture} />

		  <Modal.Description>
		  	<Header>
		  		{showOtherUsersProfile.occupation}
		  	</Header>

		  	<Modal.Description>
		  		<h5> From - {showOtherUsersProfile.from} </h5>
		  	</Modal.Description>

		  	<Modal.Content>
		  		<Header>	
		  			About - 
		  		</Header>
		  		{showOtherUsersProfile.about} 
		  	</Modal.Content>
		  		
		  	<Modal.Description>
	
		  	</Modal.Description>	

		  </Modal.Description>
		</Modal.Content>
	

		<Modal.Actions>

		{
			userProfile.pendingRequest.includes(showOtherUsersProfile._id) || requestSentStatus === 'Sent' 
			?
			<p> Request Sent </p>
			:
			<Button
			onClick={() => {createFriendRequest(setRequests); setRequestSentStatus('Sent')}}
			style={{backgroundColor: '#816687', color: 'white'}} 
			type="Submit">

				Add Friend 
			</Button>
		}



		</Modal.Actions>

		

		</Modal>
	)



}

