import React from 'react'
import { Card, Feed, Icon} from 'semantic-ui-react'

export default function PostsList(props) {

	const posts = props.posts.map((post) => {
		return(
			<Card>
			<Feed>
				<Feed.Event>
				<Feed.Label>
					<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE9QAnM-RsJuta8SNp___18t9xWTyJ9Q_QBjNpcpFJNFa2zKh4Wg5-iTG43mqmqa2YdYznun07&usqp=CAc' />
				</Feed.Label>

				<Feed.Content>
					<Feed.Summary>
						<Feed.User>
							{post.user.name}
						</Feed.User>
						
						<Feed.Extra>	
							<Feed.Date>
								{post.posted}
							</Feed.Date>
						</Feed.Extra>
							<Feed.Extra images>
					          <a>
					            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE9QAnM-RsJuta8SNp___18t9xWTyJ9Q_QBjNpcpFJNFa2zKh4Wg5-iTG43mqmqa2YdYznun07&usqp=CAc' />
					          </a>
				        </Feed.Extra>
				        
				        <Feed.Extra text>
				          Ours is a life of constant reruns. We're always circling back to where
				          we'd we started, then starting all over again. Even if we don't run
				          extra laps that day, we surely will come back for more of the same
				          another day soon.
				        </Feed.Extra>				        	
					
					</Feed.Summary>
					<Feed.Meta>
						<Feed.Like>
							<Icon name='like' /> 4 Likes
						</Feed.Like>
					</Feed.Meta>
				</Feed.Content>
				</Feed.Event>
				
			</Feed>
			</Card>
		)
	})

	return(
		<Card>
			{posts}
		</Card>
	)
}