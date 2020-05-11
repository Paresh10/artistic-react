import React, { useState, useEffect } from 'react'
import PostsList from '../PostsList'
import PostNewForm from '../PostNewForm'
import ShowPost from '../ShowPost'
import EditPost from '../EditPost'
import ViewProfile from '../ViewProfile'
import EditUser from '../EditUser'

export default function MainContainer({ userProfile, setUserProfile, loggededIn, loggedInUserId, message, deleteUser, buttonClick}) {
	const [posts, setPosts] = useState([])
	const [showPostById, setShowPostById] = useState('')
	const [action, setAction] = useState('')
	const [idOfPostToEdit, setIdOfPostToEdit] = useState(-1)

	// Users
	const [idOfUserToEdit, setIdOfUserToEdit] = useState(-1)
	const [users, setUsers] = useState([])
	const [loggedIn, setLoggedIn] = useState(false)



useEffect(() => {
	getPosts()
	getAllUsers()
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
		
		console.log(newPostResponse.status)
		
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

		setShowPostById(showPostJson.data)
		setAction('showPost')


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

// Close Modal --> Post
const closeModal = () => setIdOfPostToEdit(-1)

// Close Modal --> User
const closeUserModal = () => setIdOfUserToEdit(-1)





// USER ROUTES STARTS HERE

// GET Route --> for all the users
const getAllUsers = async () => {
	try {
		const url = process.env.REACT_APP_API_URL + "/users"

		const usersResponse = await fetch(url, {
			credentials: 'include'
		})

		const usersJson = await usersResponse.json()

		setUsers(usersJson.data)

		console.log("usersJson")
		console.log(usersJson)
	}

	catch (err) {
		console.error(err)
	}	
}




// Get Route --> Edit User
const editUserProfile = (idOfUserToEdit) => setIdOfUserToEdit(idOfUserToEdit)

// PUT Route --> Update user
const updateUser = async (updateUser) => {
	const url = process.env.REACT_APP_API_URL + `/users/` + idOfUserToEdit

	try {
		const updateUserResponse = await fetch(url, {
			credentials: 'include',
			method: 'PUT',
			body: JSON.stringify(updateUser),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		const updateUserJson = await updateUserResponse.json()

		if (updateUserResponse.status === 200) {
		

			setUserProfile(updateUserJson.data)
			setIdOfUserToEdit(-1)


			console.log("userProfile in update")



		}

	}
	catch (err) {
		console.error(err)
	}

}	





return(
		<React.Fragment>

		{
			action === "showPost"
			&&
			<ShowPost
			userProfile={userProfile}
			showPostById={showPostById}		
			editPost={editPost}
			deletePost={deletePost}		
			/>

		}

			<ViewProfile
			userProfile={userProfile}
			editUserProfile={editUserProfile}
			updateUser={updateUser}
			deleteUser={deleteUser}
			/>

			{
				idOfUserToEdit !== -1
				&&
			<div>
				<EditUser
				closeUserModal={closeUserModal} 
				updateUser={updateUser}
				userToEdit = { userProfile }
				/>
			</div>
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
			<p style={{textAlign: 'center'}}> Hey {message}! </p>

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

