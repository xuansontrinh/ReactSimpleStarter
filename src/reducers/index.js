import {combineReducers} from 'redux';
import TermReducer from './reducer_search_term';
import ActiveVideoReducer from './reducer_active_video';
import VideosSearchReducer from './reducer_search_video';

const rootReducer = combineReducers({
  term: TermReducer,
  activeVideo: ActiveVideoReducer,
  videos: VideosSearchReducer
});

export default rootReducer;