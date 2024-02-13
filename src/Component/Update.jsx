import React, { useState, useEffect } from 'react';

function Update({ newUser ,afterUpdate}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
  });

  useEffect(() => {
    // Update form data when newUser prop changes
    setFormData({
      name: newUser.name || '',
      email: newUser.email || '',
      number: newUser.number || '',
    });
  }, [newUser]);

  // get data from user
  function getFormData({ target }) {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    afterUpdate(formData)
    // Clear the form data
    setFormData({
      name: '',
      email: '',
      number: '',
    });
  };

  return (
    <>
      <div className="container">
        <h2>Update User </h2>
        <form className=" p-3" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="userName">Enter user name</label>
            <input
              onChange={getFormData}
              id="userName"
              type="text"
              name="name"
              value={formData.name}
              className="form-control p-2 border-1 mb-3"
            />

            <label htmlFor="useremail">Enter user email</label>
            <input
              onChange={getFormData}
              id="useremail"
              type="email"
              name="email"
              value={formData.email}
              placeholder='enter your email'
              className="form-control p-2 border-1 mb-3"
            />

            <label htmlFor="userNumber">Enter user number</label>
            <input
              onChange={getFormData}
              id="userNumber"
              type="number"
              name="number"
              value={formData.number}
              className="form-control p-2 border-1 mb-3"
            />
          </div>
          <button className="btn btn-warning my-3">Update user</button>
        </form>
      </div>
    </>
  );
}

export default Update;
