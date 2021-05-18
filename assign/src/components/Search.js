import React from 'react';
import axios from 'axios';
import Data from './Data';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            name: '',
            userName: '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
        this.getData(this.state.value);
    }

    getData(id) {
        axios.get('https://jsonplaceholder.typicode.com/users/'+id)
        .then((response) => {
            this.setState({
                name:response.data.name,
                userName: response.data.username,
                email: response.data.email
            });

        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Enter ID: 
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <button type="submit" onSubmit={this.handleSubmit}> Submit </button>
                </form>
                <Data 
                    name= {this.state.name}
                    userName={this.state.userName}
                    email={this.state.email}
                />

            </div>
        );
    }
}

export default Search;