import React, {Component} from 'react';
import VideoListItem from '../components/video_list_item';

import reducers from '../reducers';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { selectVideo } from '../actions/index';

class VideoList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.videos)
            return (<div>Please type some keywords to begin!</div>);
        return (
            <ul className="col-md-4 list-group">
                {this.props.videos.map((video) => <VideoListItem key={video.etag} video={video} onVideoSelect={this.props.selectVideo}/>)}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        videos: state.videos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectVideo: selectVideo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);