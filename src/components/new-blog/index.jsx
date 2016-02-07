import React from 'react';
import _ from 'lodash';
import Formsy from 'formsy-react';
import { Input, Textarea } from 'formsy-react-components';

const NewBlog = React.createClass({
  propTypes: {
    onSubmit: React.PropTypes.func
  },

  getInitialState() {
    return {
      onSubmit: _.noop
    }
  },

  getInitialState() {
    return { }
  },

  enableButton() {
    this.setState({ canSubmit: true });
  },

  disableButton() {
    this.setState({ canSubmit: true });
  },

  onSubmit(blog) {
    this.props.onSubmit(blog);
  },

  render() {
    return (
      <div>
         <Formsy.Form onValidSubmit={this.onSubmit} onValid={this.enableButton} onInvalid={this.disableButton}>
          <Input label='title'
                 name='title'
                 validationError='Title required, and less than 15 characters'
                 validations="maxLength:15"
                 required />
          <Textarea label='name'
                 name='content'
                 validationError='Content required, and less than 3000 characters'
                 validations="maxLength:3000"
                 required />
          <button type='submit' disabled={!this.state.canSubmit}>Submit</button>
        </Formsy.Form>
      </div>
    );
  }
});

export default NewBlog;
