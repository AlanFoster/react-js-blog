import Immutable from 'immutable';

export default function (state, blogs = []) {
  return state.set('blogs', Immutable.fromJS(blogs));
}
