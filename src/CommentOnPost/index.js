import React, { useState } from 'react'
import { Card, Form, Button } from 'semantic-ui-react'

export default function CommentOnPost({createNewComment, posts}) {

	const [comment, setComment] = useState('')

const handleChange = (event) => {
	setComment(event.target.value)
}

const handleSubmit = (event) => {
	event.preventDefault()
}

const findPost = posts.map((post) => {
	return(

		<Button key={post._id}
		onClick={() => {createNewComment(post._id, comment)}}
		type="submit"
		fluid style={{ backgroundColor: '#816687', color: 'white' }}>
		Post
		</Button>
	)

})
	
	return(
		<Card>
			<Card.Content>
				<Form onSubmit={handleSubmit}>
					<Form.Input
					type="text"
					name="text"
					value={comment.text}
					placeholder="Share your thoughts..."
					onChange={handleChange}
					/>
					
					{findPost}

				</Form>
			</Card.Content>
		</Card>
	)
}