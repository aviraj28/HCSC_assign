import axios from 'axios';
import React from 'react';

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compelted: [],
            value: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
        this.getCount(this.state.value);
    }

    getCount(id) {
        axios.get('https://jsonplaceholder.typicode.com/todos/'+id, {
            headers: {

            },
        }).then((response) => {
            console.log(response);
            this.setState({
                
            })
        }).catch((error) => {
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
            </div>
        )

    }
}

export default Count;