import React, {Component} from 'react';

class SearchBar extends Component {
    state = {inputText:''}

    onInputChange = e =>{
        this.setState({inputText:e.target.value})
    }

    onFormSubmit = e =>{
        e.preventDefault();
        this.props.onFormSubmit(this.state.inputText)
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.inputText}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;