import React, { Component } from 'react';
import axios from 'axios';

export default class PersonInput extends Component {

    state = {
        name: ""
    };

    handleChange = (event) => {
        this.setState({ name: event.target.value });
        console.log('name - ', this.state.name);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };

        // axios.delete(`https://jsonplaceholder.typicode.com/users{this.state.id}`)
        axios.post("https://jsonplaceholder.typicode.com/users", { user })
            .then(res => {
                console.log('res - ', res);
                console.log('res.data - ', res.data);
            });
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person name:
                    <input type="text" name="name" onChange={this.handleChange}/>
                </label>
                <button type="submit">Add</button>
            </form>
        )
    }
}   