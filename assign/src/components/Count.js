import axios from 'axios';
import React from 'react';
import Title from './Title';

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compelted: [],
            value: null,
            count: 1,
            title: ''
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

    handleCount = () => {
        this.setState({ count: this.state.count + 1 })
        this.getCount(this.state.count);
    }

    getCount(id) {
        axios.get('https://jsonplaceholder.typicode.com/todos/'+id, {
            headers: {

            },
        }).then((response) => {
            this.setState({
                title: response.data.title
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
                <br />
                <button type="submit" onClick={this.handleCount}> Count </button>
                <Title
                    title={this.state.title}
                />
            </div>
        )

    }
}

export default Count;