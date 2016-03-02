import Immutable, { Map } from 'immutable';

export default function (blogState, blog) {
  const immutableBlog = Immutable.fromJS(blog);
  const id = immutableBlog.get('id');
  return blogState.set(id, immutableBlog);
}
