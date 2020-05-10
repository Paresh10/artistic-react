import React from 'react'
import { Card, Icon, Image, Button} from 'semantic-ui-react'

export default function PostsList(props) {

	const posts = props.posts.map((post) => {
		return(

			<Card.Group key={post._id} style={{ margin: '10px'}}>
				<Card>
					<Card.Content>
						<Image
						floated='left'
          				size='mini'
          				src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE9QAnM-RsJuta8SNp___18t9xWTyJ9Q_QBjNpcpFJNFa2zKh4Wg5-iTG43mqmqa2YdYznun07&usqp=CAc'
						/>

						<Card.Header>
							{post.user.name}
						</Card.Header>

						<Card.Meta>
							{post.posted}
						</Card.Meta>

						<Card.Description>
							{post.body}
						</Card.Description>

					</Card.Content>


					<Card.Content extra>
					<div className="ui three buttons">
						<Button basic color='grey'>
						<Icon name='thumbs up outline'/>Like
						</Button>

						<Button>
						<Icon name='comment' />Comment
						</Button>

						<Button
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








