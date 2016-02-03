import { Map } from 'immutable';
import _ from 'lodash';
import addBlog from './add-blog';

export default function (state, blogs = []) {
  return _.reduce(blogs, addBlog, state.set('blogs', Map()));
}
