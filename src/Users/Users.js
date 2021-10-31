import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('https://food-delivery-sabbir.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    } ,[])


    return (
          <div className="container my-5">
              <div className="checkout-header my-5">
             <h1>Your Information</h1>
             </div>

              {
                  users.map(user => <User
                    key={user._id}
                    user={user}
                  >

                  </User>)
              }
             
          </div>
    );
};

export default Users;