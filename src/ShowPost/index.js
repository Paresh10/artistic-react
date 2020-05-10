import React, { useState } from 'react'
import {  Modal, Header, Button, Image, Icon } from 'semantic-ui-react'

export default function ShowPost({showPostById}){




	return(
		<Modal trigger={<Button 
		style={{ backgroundColor: '#816687', color: 'white', margin: '10px'}}> 
		<Icon name='write square'/> See full Post
		</Button>}
		closeIcon={true}
		>

		<Modal.Header style={{ color: '#816687' }}>
			Posted by: –
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
		<Modal.Actions>
			<Button style={{backgroundColor: '#816687', color: 'white'}} type="Submit"> 
				Edit 
			</Button>
			<Button style={{backgroundColor: '#816687', color: 'white'}} type="Submit"> 
				Delete 
			</Button>						
		</Modal.Actions>
		</Modal>
	)
}