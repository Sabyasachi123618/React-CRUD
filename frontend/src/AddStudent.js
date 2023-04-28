import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [id,setId] = useState('');
  const navigate = useNavigate();
  function handleSubimt(event){
    event.preventDefault();
    axios.post("http://localhost:8000/Add",{id,name,email})
    .then(navigate("/"));
  }
  return (
    <form onSubmit={handleSubimt}>
      <div class="form-group">
    <label htmlFor="Id">Name</label>
    <input type="number" class="form-control" id="Id"  placeholder="Enter Id "
    onChange={e=>setId(e.target.value)}
    />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label htmlFor="Name">Name</label>
    <input type="text" class="form-control" id="Name"  placeholder="Enter name "
    onChange={e=>setName(e.target.value)}
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

export default AddStudent;