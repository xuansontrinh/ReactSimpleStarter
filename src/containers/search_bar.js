import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {updateTerm, searchVideos} from '../actions/index';

class SearchBar extends Component {

  	constructor(props) {
    	super(props);
	}
	

  	render() {
    	return (
      	<div className="search-bar row">
					<div className="col-md-11" style={{display: 'flex'}}>
						<input 
							value={this.props.term}
							style={{flex: 1}}
							onChange={event => this.props.updateTerm(event.target.value)}
							onKeyPress={event => {if (event.key === 'Enter') this.props.searchVideos(this.props.term)}} 
						/>
					</div>
					<div 
						className="col-md-1"
					>
						<button 
							className="btn btn-light"
							onClick={() => this.props.searchVideos(this.props.term)}
							>
							<i className="material-icons">youtube_searched_for</i>
						</button>
					</div>
      	</div>
    	);
  	}
};

function mapStateToProps(state) {
	return {
		term: state.term
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		updateTerm: updateTerm, 
		searchVideos: searchVideos
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
