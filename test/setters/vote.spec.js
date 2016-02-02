import { expect } from 'chai';
import { List, Map } from 'immutable';
import { vote } from 'src/setters';

describe.only('setters/blog', function () {
  context('when the blog has no previous votes', function () {
    beforeEach(function () {
      const firstBlog = Map({ id: 1, title: 'Blog Title', content: 'Blog Content' });
      const initialState = Map({
        blogs: List([
          firstBlog
        ])
      });
      this.result = vote(initialState, firstBlog);
    });

    it('sets the vote count to one', function () {
      expect(this.result).to.equal(Map({
        blogs: List([
          Map({ id: 1, title: 'Blog Title', content: 'Blog Content', votes: 1 })
        ])
      }))
    });
  });

  context('when the blog has previous votes', function () {
    beforeEach(function () {
      const firstBlog = Map({ id: 1, title: 'Blog Title', content: 'Blog Content', votes: 3 });
      const initialState = Map({
        blogs: List([
          firstBlog
        ])
      });
      this.result = vote(initialState, firstBlog);
    });

    it('sets the vote count to four', function () {
      expect(this.result).to.equal(Map({
        blogs: List([
          Map({ id: 1, title: 'Blog Title', content: 'Blog Content', votes: 4 })
        ])
      }))
    });
  });
});
