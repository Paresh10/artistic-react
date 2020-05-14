import React, { useState } from 'react'
import { Modal, Feed, Button } from 'semantic-ui-react'

export default function Notifications({userProfile, requests, acceptOrDeclineFriendRequest, viewOtherUsersProfile, acceptOrDeclineRequest, showOthereUsersProfile}) {


return (

 <Modal 
 		closeIcon={true} 
		trigger={<Button
		style={{ backgroundColor: '#816687', color: 'white', margin: '10px'}}> 
		Notifications
		</Button>}>
    
    <Modal.Content>
      <Modal.Header>Recent Activity</Modal.Header>
    </Modal.Content>
    <Modal.Content>

			{
				<React.Fragment>
				findNotifications = requests.map((request) => {
					if (request.recipient._id == userProfile._id ) {
	
		console.log("request in the function")
		console.log(request)
      <Feed>
        <Feed.Event>
          <Feed.Label image={request.sender.profilePicture} />
          <Feed.Content>
            <Feed.Date content='' />


            <Feed.Summary> 
              <a onClick={() => 
              	{viewOtherUsersProfile(request.sender._id)}}>
              		{request.sender.name} </a> 
              		sent you a friend request 
	         	 
	         	 <Button id={request._id} 
	         	 onClick={(event) => {acceptOrDeclineRequest(event.target.id)}}
	         	 style={{size: 'mini', marginLeft: '20px', marginRight: '10px'}} 
	         	 basic color='green'>
	            	Approve
	          	</Button>

	          	<Button>
	          	onClick={(event) => {acceptOrDeclineRequest(event.target.id)}}
	          	basic color='red'>
	            	Decline
	          	</Button>
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

      </Feed>
      </React.Fragment>

     }
   }) 

  } 
    </Modal.Content>
	
  </Modal>
)



// return(
// 	<div>
// 		{findNotifications}
// 	</div>
// )


}










