import React, { useState, useEffect } from 'react'
import { Modal, Button, Image, Header, Card } from 'semantic-ui-react'


export default function ViewProfile({deleteUser, users, userProfile, updateUser, editUserProfile }) {


const findUsersFriends = users.map((user) => {
	return(
		<p style={{fontSize: '10px'}}>

			{
				user._id === userProfile._id
				&&
				`${user.friends.length} Friends`
			}
		</p>
	)
})


return(
		<Modal trigger={<Button
		style={{ float: 'right', backgroundColor: '#816687', color: 'white', margin: '10px'}}> 
		ViewProfile
		</Button>}
		closeIcon={true}
		>

		<Modal.Header style={{ color: '#816687' }}>
			{userProfile.name}

			{findUsersFriends}
		
		</Modal.Header>


		<Modal.Content image>
		  <Image wrapped size='medium' src={userProfile.profilePicture} />

		  <Modal.Description>
		  	<Header>
		  		{userProfile.occupation}
		  	</Header>

		  	<Modal.Description>
		  		<h5> From - {userProfile.from} </h5>
		  	</Modal.Description>

		  	<Modal.Content>
		  		<Header>	
		  			About - 
		  		</Header>
		  		{userProfile.about} 
		  	</Modal.Content>
		  
		  </Modal.Description>
		</Modal.Content>
	
		
		<Modal.Actions>
			<Button
			onClick={() => {editUserProfile(userProfile._id)}}
			style={{ backgroundColor: '#816687', color: 'white'}} 
			type="Submit"> 
				Edit 
			</Button>


			<Button
			onClick={() => {deleteUser(userProfile._id)}}
			style={{backgroundColor: '#816687', color: 'white'}} 
			type="Submit"> 
				Delete 
			</Button>						
		</Modal.Actions>

		</Modal>
	)
}