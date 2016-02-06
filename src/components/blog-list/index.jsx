import React from 'react';
import EmptyState from './empty-state';
import Blog from '../blog';
import _ from 'lodash';

const BlogList = React.createClass({
  isEmpty() {
    const blogs = this.props.blogs;

    return !_.isObject(blogs) || blogs.isEmpty();
  },

  render() {
    if (this.isEmpty()) return <EmptyState />;

    const blogs = (
      this.props.blogs.toList()
                .map(blog => <Blog key={blog.get('id')} blog={blog} />)
                .toJS()
    );

    return (
      <div>{blogs}</div>
    );
  }
});

export default BlogList;
