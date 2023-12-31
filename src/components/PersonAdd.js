import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import API from '../api';

export default function PersonAdd(){
    const [name, setName] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        console.log("handleSubmit");
        console.log(name);
        API.post(`users`, 
        {
            name: name,
            email: ""
        })
        // axios.post(`http://localhost:3000/users`, 
        // {
        //     name: name,
        //     email: ""
        // })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        resetValues();
    }
    function resetValues(){
        setName("");
    }
    
    return (
        <>
            <h2>Add Person Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Person Name:
                    <input value={name} type="text" name="name" onChange={e => setName(e.target.value)} />
                </label>
                <button type="submit">Add</button>
            </form>
        </>

    )
    

}