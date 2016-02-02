import Immutable from 'immutable';

export default function (state, blog) {
  const incrementVotes = blog => blog.update('votes', 0, n => n + 1);

  return state.updateIn(['blogs', blog.get('id')], incrementVotes);
}
