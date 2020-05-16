import React, { useState } from 'react'
import {  Modal, Header, Button, Image, Card } from 'semantic-ui-react'

export default function ShowPost({ userProfile, editPost, deleteComments, showPostById, commentedPostFound, deletePost }){

console.log("showPostById")
console.log(showPostById)


const commentsFoundUser = showPostById.comments.map((post) => {
	return(
		<Card key={post._id} 
		style={{ border: '2px' }}
		>
			<Card.Content>
				<Image 
		          floated='right'
		          size='mini'
		          src={post.commenter.profilePicture}
				/>

		        <Card.Header>{post.commenter.name}</Card.Header>
		        <Card.Meta> {userProfile.friends.length} friends</Card.Meta>				

		        <Card.Description>
		          	{post.text}	
		        </Card.Description>
			</Card.Content>

			{
				userProfile._id === post.commenter._id

				&&
		      <Card.Content extra>
		          <Button onClick={() => {deleteComments(showPostById._id, post._id)}}
		          basic fluid color='red'>
		            Delete
		          </Button>

		      </Card.Content>	
			}


		</Card>		
	)
})

	return(
		<Modal trigger={<Button 
		style={{ backgroundColor: '#816687', color: 'white'}}> 
		See full Post
		</Button>}
		closeIcon={true}
		>

		<Modal.Header style={{ color: '#816687' }}>
			Posted by: – {showPostById.user.name}
		</Modal.Header>

		<Modal.Content >
		  <Image wrapped size='medium' src={showPostById.postPicture} />

		  <Modal.Description>
		  	<Header>
		  		
		  	</Header>
		  	<p>
		  		{showPostById.body}
		  	</p>
		  </Modal.Description>
		</Modal.Content>
			<Modal.Content>
				{commentsFoundUser}
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