import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'

const YOUTUBE_API_KEY = 'AIzaSyDxuS36hDQzKX-839qZuLAJ94K5jRny4CY';

// Create a new component. This component should produce some html
class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [] };
  }

  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));
