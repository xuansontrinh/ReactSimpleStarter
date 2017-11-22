import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from '../containers/search_bar';
import VideoList from '../containers/video_list';
import VideoDetail from '../containers/video_detail';

// Create a new component. This component should produce some html
class App extends Component {

  constructor(props) {
    super(props);

		this.state = { 
			videos: [], 
		};
		
		this.videoSearch('miley cyrus');
	}

	videoSearch(term) {
		
	}
	  


	render() {
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
				<div className="row">
					<VideoDetail/>
					<VideoList/>
				</div>
			</div>
		);
	}
}

export default App;
