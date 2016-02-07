import Actions from '../actions';

export function addBlog(blog) {
  return { type: Actions.ADD_BLOG, blog };
}

export function vote(blog) {
  return { type: Actions.VOTE, blog };
}
