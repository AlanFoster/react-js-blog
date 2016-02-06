import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import blogPropTypes from './prop-types/blog';

const Blog = React.createClass({
  propTypes: {
    blog: blogPropTypes.isRequired
  },

  render() {
    const blog = this.props.blog;

    return (
      <div>
        <h1>{blog.get('title')}</h1>
        <div>{blog.get('content')}</div>
        <div>{blog.get('votes') || 0} Votes</div>
      </div>
    );
  }
});

export default Blog;
