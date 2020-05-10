import React, { useState, useEffect } from 'react'
import PostsList from '../PostsList'
import PostNewForm from '../PostNewForm'
import ShowPost from '../ShowPost'
import EditPost from '../EditPost'

export default function MainContainer({loggedInUserId}) {
	const [posts, setPosts] = useState([])
	const [showPostById, setShowPostById] = useState('')
	const [action, setAction] = useState('')
	const [idOfPostToEdit, setIdOfPostToEdit] = useState(-1)



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
		
		console.log(newPostJson.status)
		
		if (newPostJson.status === 201) {

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
		setAction('showPost')

		console.log("showPostById")
		console.log(showPostById)
	}
	catch (err) {
		console.error(err)
	}
}



// Delete route for Post
const deletePost = async (postId) => {
	const url = process.env.REACT_APP_API_URL + '/posts/' + postId
	

	try {
		const deletePostResponse = await fetch(url, {
			credentials: 'include',
			method: 'DELETE'
		})

		if (deletePostResponse.status === 200) {
			setPosts(posts.filter(post => post._id !== postId))
		}
	}
	catch (err) {
		console.error(err)
	}
}


// Edit Post route
const editPost = (idOfPostToEdit) => setIdOfPostToEdit(idOfPostToEdit)

// Update Post 
const updatePost = async (updatePost) => {
	const url = process.env.REACT_APP_API_URL + `/posts/` + idOfPostToEdit

	try {
		const updatePostResponse = await fetch(url, {
			credentials: 'include',
			method: 'PUT',
			body: JSON.stringify(updatePost),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		const updatePostJson = await updatePostResponse.json()

		if (updatePostResponse.status === 200) {
			const idOfPostToBeUpdated = posts.findIndex(post => post._id === idOfPostToEdit)
			posts[idOfPostToBeUpdated] = updatePostJson.data

			setPosts(posts)
			setIdOfPostToEdit(-1)

			console.log("post in update")
			console.log(posts)
		}


	}
	catch (err) {
		console.error(err)
	}


}

// Close Modal
const closeModal = () => setIdOfPostToEdit(-1)














return(
		<React.Fragment>
		{
			action === "showPost"
			&&
			<ShowPost
			loggedInUserId={loggedInUserId}
			showPostById={showPostById}		
			editPost={editPost}
			deletePost={deletePost}		
			/>

		}



	
		{
			idOfPostToEdit !== -1
			&&
		<div>
			<EditPost 
			closeModal={closeModal}
			updatePost={updatePost}
			postToEdit = 
			{posts.find((post) => post._id === idOfPostToEdit)}
			/>
		</div>
		}
	

			<PostNewForm 
			addNewPost={addNewPost}/>

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

