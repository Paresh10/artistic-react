import React, { useState } from 'react'
import { Modal, Feed, Button } from 'semantic-ui-react'

export default function Notifications({userProfile, requests, acceptOrDeclineFriendRequest, viewOtherUsersProfile, acceptOrDeclineRequest, showOthereUsersProfile}) {


const completeFeedList = requests.map((req) => {
				return(
					<Feed.Summary>

		              <a onClick={() => 
		              	{viewOtherUsersProfile(req.sender._id)}}>
		              		{req.sender.name} </a> 
		              		 sent you a friend request
			         	 
			         	 <Button id={req._id}
			         	 onClick={(event) => {acceptOrDeclineRequest(event.target.id)}}
			         	 style={{size: 'mini', marginLeft: '20px', marginRight: '10px'}} 
			         	 basic color='green'>
			            	Approve
			          	</Button>

			          	<Button	
			          	onClick={(event) => {acceptOrDeclineRequest(event.target.id)}}
			          	basic color='red'>
			            	Decline
			          	</Button>
			        </Feed.Summary>		
				)


			})		

console.log("completeFeedList")
console.log(completeFeedList)
console.log("request in notifications")
console.log(requests)



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

      <Feed>
        <Feed.Event>
          <Feed.Label image="{request.sender.profilePicture}" />
          <Feed.Content>
            <Feed.Date content='' />

            {
            	completeFeedList
            }
       	 

          </Feed.Content>
        </Feed.Event>

      </Feed>
   

  
    </Modal.Content>
	
  </Modal>
)



return(
	<div>
		{completeFeedList}
	</div>
)


}










