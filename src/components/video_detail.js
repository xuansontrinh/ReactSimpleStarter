import React, {Component} from 'react';

export default class VideoDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        let video = this.props.video;
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