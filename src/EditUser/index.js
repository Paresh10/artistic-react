import React, { useState } from 'react'
import { Form, Button, Modal, Header } from 'semantic-ui-react'

export default function EditUser({updateUser, userToEdit, closeUserModal}) {
	  const [user, setUser] = useState(userToEdit)



	  const handleChange = event => setUser({ ...user, [event.target.name]: event.target.value })

	  const handleSubmit = (event) => {
	    event.preventDefault()
	    updateUser(user)
	  }


	const uploadProfilePicture = async (event) => {

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
    
    setUser({
    	profilePicture: file.secure_url
	   })
	 }






	  return(
	   <Modal open={true} closeIcon={true} onClose={closeUserModal}> 
	     <Header>
	       <h3>Enter new info</h3>
	     </Header>
	     <Modal.Content>
	        <Form onSubmit={handleSubmit}>
	          <Form.Input
	          	label="Name" 
	            type="text"
	            name="name"
	            value={user.name}
	            placeholder={user.name}
	            onChange={handleChange}
	          />
	          	<Form.Input
	          	label="Occupation"  
	            type="text"
	            name="occupation"
	            value={user.occupation}
	            placeholder={user.occupation}
	            onChange={handleChange}
	          />
	          	<Form.Input
	          	label="From"  
	            type="text"
	            name="from"
	            value={user.from}
	            placeholder={user.from}
	            onChange={handleChange}
	          />

	          	<Form.Input
	          	label="About"  
	            type="text"
	            name="about"
	            value={user.about}
	            placeholder={user.about}
	            onChange={handleChange}
	          />

	          	<Form.Input
	          	label="Upload Picture"  
	            type="file"
	            name="profilePictire"
	            onChange={uploadProfilePicture}
	          />

	          <Modal.Actions>
	            <Button 
	            style={{ backgoundColor: '#816687', color: 'white'}}
	            type="Submit">Update Profile</Button>
	          </Modal.Actions>
	        </Form>
	      </Modal.Content>
	    </Modal>
	  )    
}