import React from 'react';
import { Router, Route } from 'react-router';
import App from 'components/app';
import NewBlog from 'containers/new-blog';
import BlogListContainer from 'containers/blog-list';
import PageNotFound from 'components/page-not-found';

const routes = (
  <Route component={App}>
    <Route path='/' component={BlogListContainer} />
    <Route path='/new' component={NewBlog} />
    <Route path='*' component={PageNotFound} />
  </Route>
);

export default routes;
