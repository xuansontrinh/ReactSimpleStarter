import YTSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyDxuS36hDQzKX-839qZuLAJ94K5jRny4CY';

export function updateTerm(term) {
  return {
    type: 'CHANGE_TERM',
    payload: term
  }
}

function receiveVideos(videos) { 
    return {
      type: 'SEARCH',
      payload: videos
    }
}

export function searchVideos(term) {
  return function(dispatch) {
    return YTSearch({key: YOUTUBE_API_KEY, term: term}, (videos) => {
      dispatch(receiveVideos(videos));
    });
  }
  
}

export function selectVideo(video) {
  return {
    type: 'SELECT_VIDEO',
    payload: video
  }
}