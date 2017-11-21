import React, {Component} from 'react';

export default class VideoListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.video = this.props.video;
    }

    render() {
        return (
            <li 
                onClick={() => this.props.onVideoSelect(this.video)}
                className="list-group-item"
            >
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={this.video.snippet.thumbnails.default.url} />
                    </div>

                    <div className="media-body">
                        <div className="media-heading">{this.video.snippet.title}</div>
                    </div>
                </div>
            </li>
        );
    }
}