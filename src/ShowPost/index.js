import React, { useState } from 'react'
import {  Modal, Header, Button, Image } from 'semantic-ui-react'

export default function ShowPost({ userProfile, editPost, showPostById, deletePost }){



	return(
		<Modal trigger={<Button 
		style={{ backgroundColor: '#816687', color: 'white', margin: '10px'}}> 
		See full Post
		</Button>}
		closeIcon={true}
		>

		<Modal.Header style={{ color: '#816687' }}>
			Posted by: – {showPostById.user.name}
		</Modal.Header>

		<Modal.Content image>
		  <Image wrapped size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' />

		  <Modal.Description>
		  	<Header>
		  		Modal Header
		  	</Header>
		  	<p>
		  		{showPostById.body}
		  	</p>
		  </Modal.Description>
		</Modal.Content>
	{
			userProfile._id === showPostById.user._id
			&&
		
		<Modal.Actions>
			<Button
			onClick={() => {editPost(showPostById._id)}} 
			style={{backgroundColor: '#816687', color: 'white'}} 
			type="Submit"> 
				Edit 
			</Button>
			<Button
			onClick={() => {deletePost(showPostById._id)}} 
			style={{backgroundColor: '#816687', color: 'white'}} 
			type="Submit"> 
				Delete 
			</Button>						
		</Modal.Actions>
	}
		</Modal>
	)
}