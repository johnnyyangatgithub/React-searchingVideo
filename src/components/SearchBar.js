import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value })
    }

    onFormSubmit = event => {
        event.preventDefault();//防止在用户键入enter的时候页面自动刷新

        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (
            <div className="earch-bar ui segment">
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>Vedio Search</label>
                        <input
                            type='text'
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;