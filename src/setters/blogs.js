import Immutable from 'immutable';
import _ from 'lodash';

export default function (state, blogs = []) {
  const idToBlogs = _.reduce(blogs, function (acc, blog) {
    acc[`${blog.id}`] = blog;
    return acc;
  }, {});

  return state.set('blogs', Immutable.fromJS(idToBlogs));
}

