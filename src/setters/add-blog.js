import Immutable, { Map } from 'immutable';

export default function (state, blog) {
  const immutableBlog = Immutable.fromJS(blog);
  const id = immutableBlog.get('id');
  return state.setIn(['blogs', id], immutableBlog);
}
