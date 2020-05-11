import React, { useState } from 'react'
import { Form, Button, Modal, Header, Icon } from 'semantic-ui-react'

export default function PostNewForm({addNewPost }) {

	const [post, setPost] = useState({
		body: ''
	})



  const handleChange = event => setPost({ ...post, [event.target.name]: event.target.value })


const handleSubmit = (event) => {
	event.preventDefault()
	addNewPost(post)
}



return(
	<Modal trigger={<Button 
		style={{ backgroundColor: '#816687', color: 'white', margin: '10px'}}> 
		<Icon name='write square'/> What's on your mind?
		</Button>}
		closeIcon={true}
		>
		
		<Header as='h4' style={{ color: '#816687' }}>
			Add new post
		</Header>
		<Modal.Content>
			<Form onSubmit={handleSubmit}>

				<Form.Input
				type='text'
				name='body'
				value={post.body}
				placeholder='What would you like to share?'
				onChange={handleChange}
				/>

				<Modal.Actions>
					<Button 
					style={{backgroundColor: '#816687', color: 'white'}} 
					type="Submit"> 
						Post 
					</Button>
				</Modal.Actions>
			</Form>
		</Modal.Content>
	</Modal>
)

}// PostNewForm 