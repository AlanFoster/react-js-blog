import Immutable from 'immutable';

export default function (state, blog) {
  const id = blog.get('id');
  const index = state.get('blogs').findIndex(blog => blog.id === id);

  return state.updateIn(['blogs', index], blog => blog.update('votes', 0, n => n + 1));
}
