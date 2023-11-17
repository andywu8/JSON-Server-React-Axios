import React from 'react';
import axios from 'axios';
import { useEffect, useState }  from 'react';

export default function PersonList(){
    const [persons, setPersons] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const persons = res.data;
            console.log("persons", persons);
            setPersons(persons);
        })
    }, [])
    
    return (
        <>
            <h2>Person List</h2>
            <ul>
            {
                persons.map(person =>
                    <li key={person.id}>
                        {person.name}
                    </li>
                )
            }
            </ul>
        </>

    )
    
}