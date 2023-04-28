import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const GetStudent = () => {
    const [student,setStudent] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/")
        .then(res=>setStudent(res.data))
      },[]);
      function handleDelete(id)
      {
        axios.delete(`http://localhost:8000/delete/${id}`)
        .then(window.location.reload()) 
      }
    return (
        <table class="table table-dark">
  <thead>
    <Link to="/Add" class="btn btn-primary">Add</Link>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
                {
                student.map((data,i)=>(
                    <tr key={i}>
                        <td>{data.Id}</td>
                        <td>{data.Name}</td>
                        <td>{data.Email}</td>
                        <td><button onClick={()=>handleDelete(data.Id)} type="button" class="btn btn-danger">Delete</button>/
                        <Link to={`/Update/${data.Id}`} type="button" class="btn btn-danger">Update</Link>
                        </td>
                    </tr>
                ))
               }
  </tbody>
</table>
    );
};

export default GetStudent;