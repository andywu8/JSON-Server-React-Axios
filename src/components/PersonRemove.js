import axios from 'axios';
import { useEffect, useState }  from 'react';
import API from '../api';

export default function PersonRemove(){
    const [id, setId] = useState([]);
    function handleSubmit(e){
        e.preventDefault();
        // axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        API.delete(`users/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
    return (
        <>
            <h2>Remove Person</h2>
            <div>
                <form onSubmit={handleSubmit}>
                <label>
                    Person ID:
                    <input type="number" name="id" onChange={e=>setId(e.target.value)} />
                </label>
                <button type="submit">Delete</button>
                </form>
            </div>
        </>
    )
}