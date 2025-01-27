import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function User() {



  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users`);
    console.log(data.users);
    setUsers(data.users);

  }


  useEffect(() => {

    getUsers();

  }, [])



  return (
    <>

      <div className="fa d-flex gap-4 mt-4 mb-4">
        <div className="row">
        
          {users.map((user,index) => (
              <div className="col-md-3 mt-4"  key={index}>
          <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Name: {user.userName}</h5>
            <p className="card-text">Email: {user.email}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
         
          </div>
        </div>
        </div>
      ))}
          
        </div>
      
      </div>
      

      <Link className='btn btn-primary rounded' to={'/create'}>Create New User</Link>

    </>
  )
}
