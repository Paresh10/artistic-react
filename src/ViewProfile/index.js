import React, { useState, useEffect } from 'react'
import { Modal, Button, Image, Header, Card, Icon } from 'semantic-ui-react'
import ReactTimeAgo from 'react-time-ago'


export default function ViewProfile({deleteUser, posts, users, userProfile, updateUser, editUserProfile, getLoggedInUsersProfile, likePost, openFriendsList, findCommentedPost }) {


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

const usersPost = posts.map((post) => {
	return(
<Card.Group key={post._id} style={{ margin: '10px'}}>
	{
		post.user._id === userProfile._id
		&&
				<Card>
					<Card.Header 
					style={{ textAlign: 'left', padding: '10px', backgroundColor: '#816687', color: 'white'}} > 
					{post.user.name}'s Post 
					</Card.Header>

					<Card.Content>
						<Image
						floated='left'
          				size='mini'
          				src={post.user.profilePicture}
						/>

						<Card.Header>

						<a style={{ color: '#816687'}}>
							{post.user.name}
						</a>

						</Card.Header>

						<Card.Meta>

						<ReactTimeAgo date={post.posted}/>

						</Card.Meta>

						<Card.Description>

						{post.body}

						</Card.Description>

					</Card.Content>

					{
						 post.postPicture
							&&
					<Card.Content extra>
						<Image src=	{post.postPicture} style={{width: '100%', padding: '0'}}/>
					</Card.Content>
					}


					<Card.Content extra>
					<div className="ui two mini buttons">


						<Button id={post._id} onClick={(event) => likePost(event.target.id, [])}
						style={{ backgroundColor: '#816687', color: 'white', borderColor: 'white'}}>
						<Icon name='thumbs up outline'/>Likes {post.likesArray.length}
						</Button>

						<Button
						onClick={() => {findCommentedPost(post._id)}}
						style={{ backgroundColor: '#816687', color: 'white'}}>
						<Icon name='comment' />Comment {post.comments.length}
						</Button>

					</div>
					</Card.Content>

				</Card>
	}
			</Card.Group>

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

			<a onClick={() => {openFriendsList(); getLoggedInUsersProfile(userProfile._id)}}>  {findUsersFriends} </a>

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

			<Card.Group>

				{usersPost}


		  </Card.Group>

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
