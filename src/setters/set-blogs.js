import { Map } from 'immutable';
import _ from 'lodash';
import addBlog from './add-blog';

export default function (_blogState, blogs = []) {
  return _.reduce(blogs, addBlog, Map());
}
