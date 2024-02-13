import React, { useState } from 'react';

function Home({ storUser }) {

  const [formData, setFormData] = useState();

  // get data from user 
  function getFormData({ target }) {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    storUser(formData)
    // Clear the form data
    setFormData((prevFormData) => ({
      ...prevFormData,
      name: '',
      email: '',
      number: '',
    }));
  };



  return (
    <>
      <div className="container">
        <form className=" p-3" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="userName">Enter user name</label>
            <input
              onChange={getFormData}
              id="userName"
              type="text"
              name="name"
              className="form-control p-2 border-1 mb-3"
            />

            <label htmlFor="useremail">Enter user email</label>
            <input
            className="form-control p-2 border-1 mb-3"
            onChange={getFormData}
            type="email" 
            id='useremail'
            name='email'
            />

            <label htmlFor="userNumber">Enter user number</label>
            <input
              onChange={getFormData}
              id="userNumber"
              type="number"
              name="number"
              className="form-control p-2 border-1 mb-3"
            />
          </div>
          <button className="btn btn-info my-3">Add user</button>
        </form>
      </div>
    </>
  );
}

export default Home;
