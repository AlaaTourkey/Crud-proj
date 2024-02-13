import React from 'react'

function User({id ,name ,email,number ,deleteUser,editUser}) {

  

  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{number}</td>
        <td>{email}</td>
        <td><button className='btn btn-danger ' onClick={()=>deleteUser(id)}>Delete</button></td>
        <td><button className='btn btn-warning'  onClick={()=>editUser(id)}>Edit</button></td>
      </tr>
    </>
  )
}

export default User
