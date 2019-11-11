import PersonList from './PersonList';
import React, { Component } from 'react';
import PersonInput from './PersonInput';

class App extends Component {
    render() {
        return (
            <div>
                <PersonInput />
                <PersonList />
            </div>
        );
    }
}

export default App;