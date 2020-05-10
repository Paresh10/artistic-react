import React, { useState, useEffect } from 'react'
import PostsList from '../PostsList'
import PostNewForm from '../PostNewForm'
import ShowPost from '../ShowPost'

export default function MainContainer() {
	const [posts, setPosts] = useState([])
	const [showPostById, setShowPostById] = useState('')


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


// Add New Post
const addNewPost = async (addPost) => {
	try {
		const url = process.env.REACT_APP_API_URL + "/posts"

		const newPostResponse = await fetch(url, {
			credentials: 'include',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(addPost)
		})

		const newPostJson = await newPostResponse.json()

		if (newPostResponse.status === 201) {

			setPosts([...posts, newPostJson.data])
		}
	}

	catch (err) {
		console.error(err)
	}
}


// Show route for post
const postToView = async (postId) => {
	try {
		const url = process.env.REACT_APP_API_URL + '/posts/' + postId

		const showPostResponse = await fetch(url, {
			credentials: 'include'
		})

		const showPostJson = await showPostResponse.json()

		console.log("showPostJson")
		console.log(showPostJson)

		setShowPostById(showPostJson.data)

		console.log("showPostById")
		console.log(showPostById)
	}
	catch (err) {
		console.error(err)
	}
}
















return(
		<React.Fragment>
		<ShowPost showPostById={showPostById}/>
		<PostNewForm addNewPost={addNewPost}/>
		{
			posts.length > 0
			&&
			<PostsList 
			posts={posts}
			postToView={postToView}
			/>
		}
		</React.Fragment>
	)

} // Main function

