import React from 'react'
import Avatar from 'react-avatar'


function Client({username}) {
  return (
    <div className='d-flex align-items-center mb-3'>
       <Avatar
       name={username.toString()}
       size={40}
       round='15px'
       className='mr-3' 
       />
       <span style={{marginLeft:'10px'}} className='mr-3'>{username.toString()}</span>
    </div>
  )
}

export default Client