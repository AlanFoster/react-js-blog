import { expect } from 'chai';
import { List, Map } from 'immutable';
import { vote } from '../index';

describe('vote', function () {
  context('when the blog has no previous votes', function () {
    beforeEach(function () {
      const firstBlog = Map({ id: 'uuid', title: 'Blog Title', content: 'Blog Content' });
      const initialState = Map({
        'uuid': Map({ id: 'uuid', title: 'Blog Title', content: 'Blog Content' })
      });
      this.result = vote(initialState, firstBlog);
    });

    it('sets the vote count to one', function () {
      expect(this.result).to.equal(Map({
        'uuid': Map({ id: 'uuid', title: 'Blog Title', content: 'Blog Content', votes: 1 })
      }));
    });
  });

  context('when the blog has previous votes', function () {
    beforeEach(function () {
      const firstBlog = Map({ id: 'uuid', title: 'Blog Title', content: 'Blog Content', votes: 3 });
      const initialState = Map({
        'uuid': Map({ id: 'uuid', title: 'Blog Title', content: 'Blog Content', votes: 3 })
      });
      this.result = vote(initialState, firstBlog);
    });

    it('sets the vote count to four', function () {
      expect(this.result).to.equal(Map({
        'uuid': Map({ id: 'uuid', title: 'Blog Title', content: 'Blog Content', votes: 4 })
      }));
    });
  });
});
