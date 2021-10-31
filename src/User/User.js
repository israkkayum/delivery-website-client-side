import React from 'react';

const User = ({user}) => {
 
    const {name, email, address, zip, city, phone} = user

    return (
          <div className="container checkout-form">
             <ul>
               <li> <h5>Full Name : {name}</h5> </li>
               <li><h5>Email : {email}</h5></li>
               <li><h5>Address : {address}</h5></li>
               <li><h5>City : {city}</h5></li>
               <li><h5>Zip : {zip}</h5></li>
               <li><h5>Phone : {phone}</h5></li>
             </ul>
          </div>
    );
};

export default User;