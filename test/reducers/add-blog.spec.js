import { expect } from 'chai';
import { List, Map } from 'immutable';
import _ from 'lodash';
import Actions from 'src/actions';
import reducer from 'src/reducers';

describe('reducers/add-blog', function () {
  context('adding multiple blogs and voting for one', function () {
    beforeEach(function () {
      const actions = [
        { type: Actions.ADD_BLOG, blog: { id: 'uuid1', title: 'Blog Title 1', content: 'Blog Content 1' } },
        { type: Actions.ADD_BLOG, blog: { id: 'uuid2', title: 'Blog Title 2', content: 'Blog Content 2' } },
        { type: Actions.VOTE, blog: { id: 'uuid1', title: 'Blog Title 1', content: 'Blog Content 1' } },
        { type: Actions.VOTE, blog: { id: 'uuid2', title: 'Blog Title 2', content: 'Blog Content 2' } },
        { type: Actions.VOTE, blog: { id: 'uuid1', title: 'Blog Title 1', content: 'Blog Content 1' } },
        { type: Actions.VOTE, blog: { id: 'uuid1', title: 'Blog Title 1', content: 'Blog Content 1' } },
      ];

      this.result = actions.reduce(reducer, Map());
    });

    it('adds both blogs', function () {
      expect(this.result).to.equal(Map({
        blogs: Map({
          'uuid1': Map({ id: 'uuid1', title: 'Blog Title 1', content: 'Blog Content 1', votes: 3 }),
          'uuid2': Map({ id: 'uuid2', title: 'Blog Title 2', content: 'Blog Content 2', votes: 1 })
        })
      }))
    });
  });
});
