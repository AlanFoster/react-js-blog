import React from 'react';
import { browserHistory } from 'react-router'
import NewBlog from '../../components/new-blog';
import { connect } from 'react-redux';
import { addBlog } from '../../action-creators';

const mapStateToProps = function (state) {
  return { };
};

const mapDispatchToProps = {
  onSubmit: function (...args) {
    browserHistory.push('/');
    return addBlog(...args);
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBlog);
