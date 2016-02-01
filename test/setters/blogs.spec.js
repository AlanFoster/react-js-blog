import { expect } from 'chai';
import { List, Map } from 'immutable';
import { setBlogs } from 'src/setters';

describe('setters/blog', function () {
  context('when blog values are not present', function () {
    beforeEach(function () {
      const initialState = Map();
      this.result = setBlogs(initialState, undefined);
    });

    it('sets blogs', function () {
      expect(this.result).to.equal(Map({
        blogs: List([])
      }))
    });
  });

  context('when blog values are present', function () {
    beforeEach(function () {
      const initialState = Map();
      this.result = setBlogs(initialState, [
        { id: 1, title: 'Blog Title', content: 'Blog Content' }
      ]);
    });

    it('sets blogs', function () {
      expect(this.result).to.equal(Map({
        blogs: List([
          Map({ id: 1, title: 'Blog Title', content: 'Blog Content' })
        ])
      }))
    });
  });
});
