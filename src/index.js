import React from 'react';
import ReactDOM from 'react-dom';
import BlogList from './components/blog-list';
import { Map } from 'immutable';

const blogs = Map({
  'uuid1': Map({ id: 'uuid1', title: 'Blog Title 1', content: 'Blog Content 1' })
})
ReactDOM.render(<BlogList blogs={blogs} />, document.getElementById('app'));
