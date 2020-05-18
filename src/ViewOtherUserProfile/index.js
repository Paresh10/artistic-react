import React, { useState  } from 'react'
import { Card, Modal, Button, Image, Header, Icon } from 'semantic-ui-react'
import ReactTimeAgo from 'react-time-ago'

	

export default function ViewOtherUserProfile
({posts,createFriendRequest, setRequests, userProfile, requests, likePost, findCommentedPost, showOtherUsersProfile}) 
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


const usersPost = posts.map((post) => {
	return(
<Card.Group key={post._id} >
	{
		post.user._id === showOtherUsersProfile._id
		&&		
				<Card >
					<Card.Header style={{ textAlign: 'left', padding: '10px', backgroundColor: '#816687', color: 'white'}} > {post.user.name}'s Post </Card.Header>

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
		<Modal style={{ width: '30%' }} 
		closeIcon={true} 
		trigger={<Button
		style={{ backgroundColor: '#816687', color: 'white', margin: '10px'}}> 
		{showOtherUsersProfile.name}'s Profile
		</Button>} 		
		>

		<Modal.Header style={{ color: '#816687' }}>

		<Modal.Content image> 
		  <Image wrapped size='medium' src={showOtherUsersProfile.profilePicture} />

		 </Modal.Content>
			{showOtherUsersProfile.name}

		{
			userProfile.pendingRequest.includes(showOtherUsersProfile._id) || requestSentStatus === 'Sent' 
			?
			<p style={{float: 'right', marginTop: '5px'}} > Request Sent </p>
			:
			<Button 
			onClick={() => {createFriendRequest(setRequests); setRequestSentStatus('Sent')}}
			style={{backgroundColor: '#816687', color: 'white', float: 'right', marginTop: '5px'}} 
			type="Submit">

				Add Friend 
			</Button>
		}	
		</Modal.Header>

		
		<Modal.Content>
		{showOtherUsersProfile.About} 
		  <Modal.Description>
		  	<Header>
		  		{showOtherUsersProfile.occupation}
		  		<h5> {showOtherUsersProfile.from} </h5>

	
		  	</Header>

		
		<Modal.Description>	
		  		<Header>	
		  			About:
		  		</Header>

		  		{showOtherUsersProfile.About} 
	
		 </Modal.Description> 		

	 </Modal.Description>
		</Modal.Content>
	
	<Modal.Actions>

		  	<Card.Group>
					
				{usersPost}

		  	</Card.Group>	
	</Modal.Actions>

		</Modal>
	)



}

