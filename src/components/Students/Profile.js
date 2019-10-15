import React from 'react';
import data from './data.json';

export default class Profile extends React.Component {
    render() {
        console.log(this.props.match.params.id);
        const filteredStudents = data.filter((student) => {
            return student.id === parseInt(this.props.match.params.id)
        });
        return (
        <div>
            <h1>{filteredStudents[0].name}</h1>
            <h1>{filteredStudents[0].grade}</h1>
        </div>
    );
 }
}