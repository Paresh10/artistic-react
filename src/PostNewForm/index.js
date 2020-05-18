import React, { useState } from 'react'
import { Form, Button, Modal, Header, Icon } from 'semantic-ui-react'

export default function PostNewForm({addNewPost, setStatus }) {

	const [post, setPost] = useState({
		body: '',
		postPicture: ''
	})


const uploadPicture = async (event) => {

    const files = event.target.files 


    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "paresh");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dy5lodsfm/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await response.json();

    console.log("file")
    console.log(file)
    console.log(file.secure_url);

    
    setPost({
    	postPicture: file.secure_url
    })
  }


const handleChange = (event) => {
	setPost({
		body: event.target.value
	})
}

const handleSubmit = (event) => {
	event.preventDefault()
	addNewPost(post)
}




return(
	<Modal trigger={<Button
		onClick={() => {setStatus(true)}} 
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

				<Form.Input
				type='file'
				name='postPicture'
				onChange={uploadPicture}	
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