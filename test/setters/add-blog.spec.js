import { expect } from 'chai';
import { List, Map } from 'immutable';
import { addBlog } from 'src/setters';

describe('setters/add-blog', function () {
  context('when no blogs are present', function () {
    beforeEach(function () {
      const initialState = Map();
      const blog = { id: 'uuid1', title: 'Blog Title 1', content: 'Blog Content 1' };
      this.result = addBlog(initialState, blog);
    });

    it('creates a new blog map', function () {
      expect(this.result).to.equal(Map({
        blogs: Map({
          'uuid1': Map({ id: 'uuid1', title: 'Blog Title 1', content: 'Blog Content 1' })
        })
      }))
    });
  });

  context('when blogs are present', function () {
    beforeEach(function () {
      const initialState = Map({
        blogs: Map({
          'uuid1': Map({ id: 'uuid1', title: 'Blog Title 1', content: 'Blog Content 1' })
        })
      });

      this.result = addBlog(initialState,
        { id: 'uuid2', title: 'Blog Title 2', content: 'Blog Content 2' }
      );
    });

    it('adds the required blog without modifying the existing blogs', function () {
      expect(this.result).to.equal(Map({
        blogs: Map({
          'uuid1': Map({ id: 'uuid1', title: 'Blog Title 1', content: 'Blog Content 1' }),
          'uuid2': Map({ id: 'uuid2', title: 'Blog Title 2', content: 'Blog Content 2' })
        })
      }))
    });
  });
});
