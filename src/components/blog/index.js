import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import _ from 'lodash';
import blogPropTypes from './prop-types/blog';
import { Button } from 'react-bootstrap';

const Blog = React.createClass({
  propTypes: {
    blog: blogPropTypes.isRequired,
    onVote: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      onVote: _.noop
    }
  },

  vote() {
    this.props.onVote(this.props.blog);
  },

  render() {
    const blog = this.props.blog;

    return (
      <div>
        <h1>{blog.get('title')}</h1>
        <div>{blog.get('content')}</div>
        <div>
          <div>{blog.get('votes') || 0} Votes</div>
          <Button bsStyle='primary' onClick={this.vote}>Vote</Button>
        </div>
      </div>
    );
  }
});

export default Blog;
