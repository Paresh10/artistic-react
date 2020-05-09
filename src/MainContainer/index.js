import React, { useState, useEffect } from 'react'
import PostsList from '../PostsList'


export default function MainContainer() {
	const [posts, setPosts] = useState([])


useEffect(() => {
	getPosts()
}, [])

// Get all the posts
const getPosts = async () => {
	try {
		const url = process.env.REACT_APP_API_URL + "/posts"

		const postsResponse = await fetch(url, {
			credentials: 'include'
		})

		const postsJson = await postsResponse.json()

		setPosts(postsJson.data)

		console.log("postsJson")
		console.log(postsJson)
	}

	catch (err) {
		console.error(err)
	}
}

return(
		<React.Fragment>
		{
			posts.length > 0
			&&
			<PostsList posts={posts}/>
		}
		</React.Fragment>
	)


} // Main function

