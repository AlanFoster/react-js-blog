import Actions from '../actions';
import _ from 'lodash';
import uuid from 'uuid';

export function addBlog(blog) {
  const blogWithId = _.extend({ id: uuid.v4() }, blog);

  return { type: Actions.ADD_BLOG, blog: blogWithId };
}

export function vote(blog) {
  return { type: Actions.VOTE, blog };
}
