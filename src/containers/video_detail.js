import React, {Component} from 'react';

import reducers from '../reducers';
import {connect} from 'react-redux';

class VideoDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let video = this.props.activeVideo;
        let url = video ? `https://www.youtube.com/embed/${video.id.videoId}` : '';
        if (!video)
            return (
                <div>Loading...</div>
            );
        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src={url}/>
                </div>
                <div className="details">
                    <div>{video.snippet.title}</div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    let av = state.activeVideo;
    if (!state.activeVideo && state.videos) {
        av = state.videos[0];
    }
	return {
		activeVideo: av
	};
}

export default connect(mapStateToProps)(VideoDetail);