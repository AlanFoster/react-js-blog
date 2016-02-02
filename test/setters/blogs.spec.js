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
        blogs: Map({})
      }))
    });
  });

  context('when blog values are present', function () {
    beforeEach(function () {
      const initialState = Map();
      this.result = setBlogs(initialState, [
        { id: 'uuid', title: 'Blog Title', content: 'Blog Content' }
      ]);
    });

    it('sets blogs', function () {
      expect(this.result).to.equal(Map({
        blogs: Map({
          'uuid': Map({ id: 'uuid', title: 'Blog Title', content: 'Blog Content' })
        })
      }))
    });
  });
});
