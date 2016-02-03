import Immutable from 'immutable';

export default function (state, blog) {
  const incrementVotes = blog => blog.update('votes', 0, n => n + 1);
  const id = Immutable.fromJS(blog).get('id');

  return state.updateIn(['blogs', id], incrementVotes);
}
