import React, { useState } from 'react'
import { Modal, List, Image, Card } from 'semantic-ui-react'

export default function FriendsList({ userProfile }) {

const [status, setStatus] = useState(true)

const closeModal = () => setStatus(false)


const showFriendsName = userProfile.friends.map((friend) => {
console.log("friend")
console.log(friend)
	return(

		<Card style={{width: '100%', backgroundColor: '#816687'}}>
			<Card.Content>
				<Image 
		          floated='right'
		          size='mini'
		          src={friend.profilePicture}
				/>

		        <Card.Header style={{color: 'white'}}>{friend.name}</Card.Header>
		        <Card.Meta style={{color: 'white'}}> {friend.occupation} </Card.Meta>				

		</Card.Content>
	  </Card>
		
	)
})


return(
	<Modal style={{width: '25%' }}
	open={status}
	closeIcon={true}
	onClose={closeModal}
	>

		{showFriendsName}
	
	</Modal>	 		
)

}