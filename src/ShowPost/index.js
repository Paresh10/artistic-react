import React, { useState } from 'react'
import {  Modal, Header, Button, Image, Card, Icon } from 'semantic-ui-react'
import ReactTimeAgo from 'react-time-ago'


export default function ShowPost({ userProfile, editPost, open, closeShowPost, deleteComments, likePost, showPostById, findCommentedPost, commentedPostFound, deletePost }){



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



/*
{<Button trigger=
		</Button>}
		style={{ backgroundColor: '#816687', color: 'white'}}> 
		See full Post
*/

	return(
		<Modal open={open}
		style={{ width: '30%' }} 
		closeIcon={true}
		onClose={closeShowPost}
		>

		<Modal.Header style={{ color: '#816687' }}>
			Posted by: – {showPostById.user.name}
		 
		    <Card.Meta style={{ fontSize: '10px', color: '#816687' }}> 
		    	<ReactTimeAgo date={showPostById.posted} /> 
		    </Card.Meta>
		</Modal.Header>


		<Modal.Content >
		  <Image wrapped size='medium' src={showPostById.postPicture} />

		  <Modal.Description>
		  		

		  	<p>
		  		{showPostById.body}
		  	</p>
		  </Modal.Description>

			<Card.Content style={{ marginTop: '20px' }} extra>
				<div className="ui two mini buttons">

				
					<Button id={showPostById._id} onClick={(event) => likePost(event.target.id, [])}
					style={{ backgroundColor: '#816687', color: 'white', border: '1px'}}>
					<Icon name='thumbs up outline'/>Likes {showPostById.likesArray.length}
					</Button>

					<Button 
					onClick={() => {findCommentedPost(showPostById._id)}}
					style={{ backgroundColor: '#816687', color: 'white'}}>
					<Icon name='comment' />Comment {showPostById.comments.length}
					</Button>					
				</div>	
			</Card.Content>

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