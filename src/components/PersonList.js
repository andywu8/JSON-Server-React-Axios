import React from 'react';
import axios from 'axios';
import { useEffect, useState }  from 'react';
import API from '../api';

export default function PersonList(){
    const [persons, setPersons] = useState([]);
    // useEffect(() => {
    //     axios.get(`http://localhost:3000/users`)
    //     .then(res => {
    //         const persons = res.data;
    //         console.log("persons", persons);
    //         setPersons(persons);
    //     })
    // }, [])
    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch('http://localhost:3000/users');
          const json = await response.json();
          setPersons(json);
        };
        fetchData();
        const intervalId = setInterval(() => {
            fetchData(); // Fetch data every 2 minutes
          }, 100);
          return () => clearInterval(intervalId);
    }, []);
    
    return (
        <>
            <h2>Person List</h2>
            <ul>
            {
                persons.map(person =>
                    <li key={person.id}>
                        {person.id}-
                        {person.name}-
                        {person.email}
                    </li>
                )
            }
            </ul>
        </>

    )
    
}