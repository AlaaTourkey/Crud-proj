import React, { useEffect, useState } from 'react';
import User from './User';
import Home from './Home';
import Update from './Update';

function Users() {
  const initialState = JSON.parse(localStorage.getItem('users')) || [];

  const [updateUser,setUpdateUser]=useState(false)
  const [newUser, setnewUser] = useState({}); //after editing
  const [users, setUsers] = useState(initialState); //all users

  // store user
  const storUser = (data) => {
    setUsers((prevUsers) => [...prevUsers, { id: prevUsers.length + 1, ...data }]);
  };

  // delete user
  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };
  // edit user 
  const editUser=(id)=>{
    let user = users.find( (item)=>item.id == id )
    setUpdateUser(true)
    setnewUser(user)
  }


  const afterUpdate = (formData) => {
    // index of the user to be updated
    const index = users.findIndex((user) => user.id === newUser.id);

    // Create a new array with the updated user
    const updatedUsers = [...users];
    updatedUsers[index] = { ...newUser, ...formData };

    // Update the state with the new array
    setUsers(updatedUsers);
    setUpdateUser(false);
  };


  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))});

  return (
    <>
      {!updateUser? <Home storUser={storUser} /> : <Update newUser={newUser} afterUpdate = {afterUpdate}/>}
      
      
      <div className="container">
        <table className="table my-4 table-bordered table-striped text-center">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>number</th>
              <th colspan="2">action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <User
                id={item.id}
                name={item.name}
                email={item.email}
                number={item.number}
                key={item.id}
                deleteUser={deleteUser}
                editUser={editUser}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Users;
