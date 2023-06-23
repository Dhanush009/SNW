import React from 'react'

const User = (props) => {
    const {data: user} = props
  return (
    <div>
        <span>{user.title} {user.firstName}</span>
        <img src={user.picture} alt="" height="100px" width="100px"/>
    </div> 
  )
}

export default User