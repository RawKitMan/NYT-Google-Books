import React, { Component } from "react";
import API from "../../utils/API";

class Search extends Component {

    state = {

        books: [],
        search: ""
    };

    componentDidMount() {
        this.loadResults();
    };

    loadResults = () => {
        API.getBooks()
        .then(res => this.setState({books: res.data, search:""}))
    }

    
    render() {
        return (
            <p>Here's search</p>
        )
    }
}

export default Search;