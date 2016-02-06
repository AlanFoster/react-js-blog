import React from 'react';

const Blog = React.createClass({
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
