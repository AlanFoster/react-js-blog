import React from 'react';
import NewBlog from '../../components/new-blog';
import { connect } from 'react-redux';
import { addBlog } from '../../action-creators';

const mapStateToProps = function (state) {
  return { };
};

const mapDispatchToProps = {
  onSubmit: addBlog
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBlog);
