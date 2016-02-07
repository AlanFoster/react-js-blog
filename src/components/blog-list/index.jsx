import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import _ from 'lodash';
import EmptyState from './empty-state';
import blogPropTypes from '../blog/prop-types/blog';
import Blog from '../blog';

const BlogList = React.createClass({
  propTypes: {
    blogs: ImmutablePropTypes.mapOf(blogPropTypes),
    onVote: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      onVote: _.noop
    }
  },

  isEmpty() {
    const blogs = this.props.blogs;

    return !_.isObject(blogs) || blogs.isEmpty();
  },

  render() {
    if (this.isEmpty()) return <EmptyState />;

    const blogs = (
      this.props.blogs.toList()
                .map(blog => <Blog key={blog.get('id')} blog={blog} onVote={this.props.onVote} />)
                .toJS()
    );

    return (
      <div>{blogs}</div>
    );
  }
});

export default BlogList;
