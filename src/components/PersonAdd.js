import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function PersonAdd(){
    const [name, setName] = useState([]);

    function handleSubmit(e){
        e.preventDefault();
        console.log("handleSubmit");
        console.log(name);
        axios.post(`https://jsonplaceholder.typicode.com/users`, name)
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
    
    return (
        <>
            <h2>Add Person Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Person Name:
                    <input type="text" name="name" onChange={e => setName(e.target.value)} />
                </label>
                <button type="submit">Add</button>
            </form>
        </>

    )
    

}