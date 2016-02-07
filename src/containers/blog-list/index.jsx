import React from 'react';
import BlogList from '../../components/blog-list';
import { connect } from 'react-redux';
import { vote } from '../../action-creators';

const mapStateToProps = function (state) {
  return {
    blogs: state.get('blogs')
  };
};

const mapDispatchToProps = {
  onVote: vote
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogList);
