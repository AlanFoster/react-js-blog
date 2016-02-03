import { Map } from 'immutable';
import Actions from '../actions';
const INITIAL_STATE = Map();
import { addBlog, vote } from '../setters';

export default function (state = INITIAL_STATE, action = {}) {
  switch(action.type) {
    case Actions.ADD_BLOG:
      return addBlog(state, action.blog);
    case Actions.VOTE:
      return vote(state, action.blog);
  }

  return state;
}
