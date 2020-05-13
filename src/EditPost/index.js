import React, { useState } from 'react'
import { Form, Button, Modal, Header } from 'semantic-ui-react'


export default function EditPost({postToEdit, updatePost, closeModal}) {

  const [post, setPost] = useState(postToEdit)

  const handleChange = event => setPost({ ...post, [event.target.name]: event.target.value })

  const handleSubmit = (event) => {
    event.preventDefault()
    updatePost(post)
  }


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

          <Form.Input 
            type="file"
            name="postPicture"
            onChange={uploadPicture}
          />          
    
          <Modal.Actions>
            <Button type="Submit">Update Post</Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  )    
}