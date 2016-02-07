import React from 'react';
import { Router, Route } from 'react-router';
import App from 'components/app';
import NewBlog from 'components/new-blog';
import BlogListContainer from 'containers/blog-list';

const routes = (
  <Route component={App}>
    <Route path='/' component={BlogListContainer} />
    <Route path='/new' component={NewBlog} />
  </Route>
);

export default routes;
