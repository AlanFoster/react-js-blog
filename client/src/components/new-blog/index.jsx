import React from 'react';
import _ from 'lodash';
import Formsy from 'formsy-react';
import { Input, Textarea } from 'formsy-react-components';
import { Button } from 'react-bootstrap';

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
    return {}
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
        <h2>New Blog</h2>
        <Formsy.Form onValidSubmit={this.onSubmit}
                     onValid={this.enableButton}
                     onInvalid={this.disableButton}>
          <Input label='Title'
                 name='title'
                 validationError='Title required, and less than 15 characters'
                 validations="maxLength:15"
                 required/>
          <Textarea label='Name'
                    name='content'
                    validationError='Content required, and less than 3000 characters'
                    validations="maxLength:3000"
                    required/>
          <Button bsStyle='primary' type='submit' disabled={!this.state.canSubmit}>Submit</Button>
        </Formsy.Form>
      </div>
    );
  }
});

export default NewBlog;
