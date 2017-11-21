import React, {Component} from 'react';

class SearchBar extends Component {

  	constructor(props) {
    	super(props);

    	this.state = {term: ''};
    	this.onInputChange = this.onInputChange.bind(this);
	}
	

  	render() {
    	return (
      	<div className="search-bar">
        	<input 
          		value={this.state.term}
				onChange={event => this.onInputChange(event.target.value)}
				onKeyPress={event => {if (event.key === 'Enter') this.props.onSearchTermChange(this.state.term)}} 
			   />
      	</div>
    	);
  	}

  	onInputChange(term) {
    	this.setState({
      		term
		});
  	}
};

export default SearchBar;
