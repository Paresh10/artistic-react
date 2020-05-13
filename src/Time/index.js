import React from 'react'
import ReactTimeAgo from 'react-time-ago'
 
export default function Time({ date }) {
  return (
    <div>
      Last seen: <ReactTimeAgo date={date}/>
    </div>
  )
}