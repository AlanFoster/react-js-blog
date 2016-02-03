import { Map } from 'immutable';
import Actions from '../actions';
const INITIAL_STATE = Map();
import { addBlog, vote } from '../setters';

export default function (state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case Actions.ADD_BLOG:
      return state.update('blogs', Map(), blogState => addBlog(blogState, action.blog));
    case Actions.VOTE:
      return state.update('blogs', Map(), blogState => vote(blogState, action.blog));
  }

  return state;
}
