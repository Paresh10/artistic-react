import React, { useState } from 'react'
import { Modal, Button, Image, Header, Icon } from 'semantic-ui-react'

	

export default function ViewOtherUserProfile({posts,createFriendRequest, showOtherUsersProfile}) {

const [findUsersPost, setFindUsersPost] = useState(posts)
const [idOfOtherUser, setIdOfOtherUser] = useState(-1)

const [state, setState] = useState({
	open: false
})


const openModal = () => setState({
	open: true
})

const closeModal = () => setState({
	open: false
})



// let post = ''

// const findUserPost = ()  => {

// 	for (let i = 0; i < posts.length; i++) {
// 		if (posts[i].user._id === showOtherUsersProfile._id)

// 			post  = posts[i].user.name
// 			console.log('post')
// 			console.log(post)
// 	}

// }
	
	/*

	*/


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
			<Button
			onClick={() => {createFriendRequest(showOtherUsersProfile._id)}}
			style={{backgroundColor: '#816687', color: 'white'}} 
			type="Submit"> 
				Add Friend 
			</Button>
					
		</Modal.Actions>

		</Modal>
	)



}

