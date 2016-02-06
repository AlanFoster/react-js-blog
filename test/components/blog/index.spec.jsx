import { expect } from 'chai';
import React from 'react';
import sd from 'skin-deep';
import { List, Map } from 'immutable';
import Component from 'src/components/blog';

describe('components/blog', function () {
  context('when all fields are present', function () {
    beforeEach(function () {
      const blog = Map({
        id: 'uuid1',
        title: 'Blog Title',
        content: 'Blog Content',
        votes: 3
      });

      this.tree = sd.shallowRender(<Component blog={blog} />)
    });

    it('contains the title', function () {
      expect(this.tree.text()).to.contain('Blog Title');
    });

    it('contains the content', function () {
      expect(this.tree.text()).to.contain('Blog Content');
    });

    it('contains the votes', function () {
      expect(this.tree.text()).to.contain('3 Votes');
    });
  });
});
