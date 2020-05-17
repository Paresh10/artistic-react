import React, { useState } from 'react'
import { Modal, Feed, Button } from 'semantic-ui-react'
import Time from '../Time'

export default function Notifications({userProfile, requests, viewOtherUsersProfile, acceptOrDeclineRequest, showOthereUsersProfile}) {


const completeFeedList = requests.map((req) => {
	console.log("req")
	console.log(req)
	return(
			<Feed.Summary key={req._id}>


              <a onClick={() => 
              	{viewOtherUsersProfile(req.sender._id)}}>
              		{req.sender.name} </a> 
              		 sent you a friend request
	         	 
	         	 <Button id={req._id}
	         	 onClick={(event) => {acceptOrDeclineRequest(event.target.id, true)}}
	         	 style={{size: 'mini', marginLeft: '20px', marginRight: '10px'}} 
	         	 basic color='green'>
	            	Accept
	          	</Button>

	          	<Button
	          	id={req._id}
	          	onClick={(event) => {acceptOrDeclineRequest(event.target.id, false)}}
	          	style={{size: 'mini', marginTop: '5px'}} 	
	          	basic color='red'>
	            	Decline
	          	</Button>
	        </Feed.Summary>		
		)


	})		


return (

 <Modal 
 		closeIcon={true} 
		trigger={<Button
		style={{ float: 'right', backgroundColor: '#816687', color: 'white', margin: '10px'}}> 
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



}










