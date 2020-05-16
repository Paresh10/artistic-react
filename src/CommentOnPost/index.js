import React, { useState } from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'

export default function CommentOnPost({createNewComment, post}) {

	const [comment, setComment] = useState('')

const handleChange = (event) => {
	setComment(event.target.value)
}

const handleSubmit = (event) => {
	event.preventDefault()
}


	
	return(
		<Modal open={true}>
			<Modal.Content>
				<Form onSubmit={handleSubmit}>
					<Form.Input
					type="text"
					name="text"
					value={comment.text}
					placeholder="Share your thoughts..."
					onChange={handleChange}
					/>
					
					<Button 
					onClick={() => {createNewComment(post._id, comment)}}
					type="submit"
					fluid style={{ backgroundColor: '#816687', color: 'white' }}>
					Post
					</Button>

				</Form>
			</Modal.Content>
		</Modal>
	)
}