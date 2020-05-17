import React, { useState } from 'react'
import { Card, Icon, Image, Button, Label} from 'semantic-ui-react'
import ReactTimeAgo from 'react-time-ago'
 


export default function PostsList({posts, foundCommentedPost,findCommentedPost, likePost, userProfile, createNewComment, viewOtherUsersProfile, setVerbal, postToView, }) {


	const allPosts = posts.map((post) => {
		
	
		return(
	
			<Card.Group key={post._id} style={{ margin: '10px'}}>
				<Card>
					<Card.Content>
						<Image
						floated='left'
          				size='mini'
          				src={post.user.profilePicture}
						/>

						<Card.Header>

						<a style={{ color: '#816687'}}
						onClick={() => 
							{ viewOtherUsersProfile(post.user._id); 
								setVerbal('True')}}
								>
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

{

}

					<Card.Content extra>
					<div className="ui three mini buttons">

					
						<Button id={post._id} onClick={(event) => likePost(event.target.id, [])}
						style={{ backgroundColor: '#816687', color: 'white', border: '1px'}}>
						<Icon name='thumbs up outline'/>Likes {post.likesArray.length}
						</Button>

						<Button 
						onClick={() => {findCommentedPost(post._id)}}
						style={{ backgroundColor: '#816687', color: 'white'}}>
						<Icon name='comment' />Comment {post.comments.length}
						</Button>

						<Button style={{ backgroundColor: '#816687', color: 'white'}}
						onClick={() => postToView(post._id)}>	
						<Icon name="envelope open outline" />	
						 Open
						</Button>						
					</div>	
					</Card.Content>

				</Card>
			</Card.Group>
		)
	})

	return(
		<Card.Group>
			{allPosts}
		</Card.Group>
		
	)
}








