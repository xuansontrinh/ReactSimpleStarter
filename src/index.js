import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = 'AIzaSyDxuS36hDQzKX-839qZuLAJ94K5jRny4CY';

// Create a new component. This component should produce some html
class App extends Component {

  	constructor(props) {
    	super(props);

		this.state = { 
			videos: [], 
			selectedVideo: null  
		};
		
		this.videoSearch('miley cyrus');
	}

	videoSearch(term) {
		YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
			this.setState({
				videos,
				selectedVideo: videos[0]
			});
		});
	}
	  


  	render() {
    	return (
      	<div>
        	<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
			<div className="row">
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList videos={this.state.videos} onVideoSelect={video => this.setState({selectedVideo: video})}/>
			</div>
      	</div>
    	);
	  }
	  

}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
