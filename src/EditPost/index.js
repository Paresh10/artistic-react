import React, { useState } from 'react'
import { Form, Button, Modal, Header } from 'semantic-ui-react'


export default function EditPost({postToEdit, updatePost, closeModal}) {

  const [post, setPost] = useState(postToEdit)

  const handleChange = event => setPost({ ...post, [event.target.name]: event.target.value })

  const handleSubmit = (event) => {
    event.preventDefault()
    updatePost(post)
  }

  return(
   <Modal open={true} closeIcon={true} onClose={closeModal}> 
     <Header>
       <h3>Enter new info</h3>
     </Header>
     <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Input 
            type="text"
            name="body"
            value={post.body}
            onChange={handleChange}
          />
    
          <Modal.Actions>
            <Button type="Submit">Update Post</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  )    
}