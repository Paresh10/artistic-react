import React, { useState } from 'react'
import {  Container, Header, Button } from 'semantic-ui-react'

export default function ShowPost({showPostById}){

	// const [post, setPost] = useState(showPostById)



	return(
		<Container textAlign='justified'>
			<Header as='h5' style={{ color: '#816687' }}>
				Post by: – 
			</Header>

			 <p> {showPostById.body} </p>

		</Container>
	)
}