import { expect } from 'chai';
import { List, Map } from 'immutable';
import { setBlogs } from 'src/setters';

describe('setters/set-blog', function () {
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
    context('and there are no existing blogs', function () {
      beforeEach(function () {
        const initialState = Map();
        this.result = setBlogs(initialState, [
          { id: 'uuid1', title: 'Blog Title 1', content: 'Blog Content 2' },
          { id: 'uuid2', title: 'Blog Title 2', content: 'Blog Content 2' }
        ]);
      });

      it('sets the new blogs', function () {
        expect(this.result).to.equal(Map({
          blogs: Map({
            'uuid1': Map({ id: 'uuid1', title: 'Blog Title 1', content: 'Blog Content 2' }),
            'uuid2': Map({ id: 'uuid2', title: 'Blog Title 2', content: 'Blog Content 2' })
          })
        }));
      });
    });

    context('and there are existing blogs', function () {
      beforeEach(function () {
        const initialState = Map({
          blogs: Map({
            'uuid1': Map({ id: 'uuid1', title: 'Blog Title 1', content: 'Blog Content 2' }),
            'uuid2': Map({ id: 'uuid2', title: 'Blog Title 2', content: 'Blog Content 2' })
          })
        });
        this.result = setBlogs(initialState, [
          { id: 'uuid3', title: 'Blog Title 3', content: 'Blog Content 3' }
        ]);
      });

      it('sets the new blogs', function () {
        expect(this.result).to.equal(Map({
          blogs: Map({
            'uuid3': Map({ id: 'uuid3', title: 'Blog Title 3', content: 'Blog Content 3' }),
          })
        }));
      });
    });
  });
});
