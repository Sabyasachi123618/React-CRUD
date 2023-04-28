import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const UpdateStudent = () => {
    
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    function handleSubmit(event)
    {
       event.preventDefault();
       console.log(id)
        axios.post(`http://localhost:8000/Update/${id}`,{name,email});
        navigate("/");
    }
    return (
        <form onSubmit={handleSubmit}>
        <div class="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" class="form-control" id="Name"  placeholder="Enter name "
    onChange={e=>setName(e.target.value)} ABC
    />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
    onChange={e=>setEmail(e.target.value)}
    />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    );
};

export default UpdateStudent;