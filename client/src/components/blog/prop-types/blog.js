import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';

export default (
  ImmutablePropTypes.contains({
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    votes: React.PropTypes.number
  })
);
