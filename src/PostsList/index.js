import React from 'react'
import { Card, Icon, Image, Button, Label		} from 'semantic-ui-react'
import ReactTimeAgo from 'react-time-ago/tooltip'


export default function PostsList(props) {


	const posts = props.posts.map((post) => {
		
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
							{ props.viewOtherUsersProfile(post.user._id); 
								props.setVerbal('True')}}
								>
							{post.user.name}
						</a>

						</Card.Header>

						<Card.Meta>

							{post.posted}

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
					<div className="ui three mini buttons">
						<Button style={{ backgroundColor: '#816687', color: 'white', border: '1px'}}	>
						<Icon name='thumbs up outline'/>Like
						</Button>
		
						<Button  style={{ backgroundColor: '#816687', color: 'white'}}>
						<Icon name='comment' />Comment
						</Button>

						<Button style={{ backgroundColor: '#816687', color: 'white'}}
						onClick={() => props.postToView(post._id)}>	
						<Icon name="envelope open outline" />
						 Post
						</Button>						
					</div>	
					</Card.Content>

				</Card>
			</Card.Group>
		)
	})

	return(
		<Card.Group>
			{posts}
		</Card.Group>
		
	)
}








