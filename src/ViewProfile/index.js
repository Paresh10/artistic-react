import React, { useState, useEffect } from 'react'
import { Modal, Button, Image, Header } from 'semantic-ui-react'


export default function ViewProfile({deleteUser, userProfile, updateUser, editUserProfile }) {



return(
		<Modal trigger={<Button 
		style={{ backgroundColor: '#816687', color: 'white', margin: '10px'}}> 
		ViewProfile
		</Button>}
		closeIcon={true}
		>

		<Modal.Header style={{ color: '#816687' }}>
			{userProfile.name}
		</Modal.Header>

		<Modal.Content image>
		  <Image wrapped size='medium' src={userProfile.profilePicture} />

		  <Modal.Description>
		  	<Header>
		  		{userProfile.occupation}
		  	</Header>

		  	<Modal.Description>
		  		<h5> {userProfile.from} </h5>
		  	</Modal.Description>

		  	<p>	{userProfile.about} </p>

		  </Modal.Description>
		</Modal.Content>
	
		
		<Modal.Actions>
			<Button
			onClick={() => {editUserProfile(userProfile._id)}}
			style={{backgroundColor: '#816687', color: 'white'}} 
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