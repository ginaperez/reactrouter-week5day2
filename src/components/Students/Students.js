import React from 'react';
import data from './data.json';
import { Link } from 'react-router-dom';

export default function Students(props){
    const mappedData = data.map(student => {
        return ( 
        <div key={student.id}>
            <h1>{student.name}</h1>
            <Link to={`/profile/${student.id}`}>View Profile</Link>
        </div>
    );
 });
    return <div>{mappedData}</div>
}