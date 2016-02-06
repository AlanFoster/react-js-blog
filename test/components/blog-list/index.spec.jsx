import { expect } from 'chai';
import React from 'react';
import sd from 'skin-deep';
import { List, Map } from 'immutable';
import Component from 'src/components/blog-list';
import Blog from 'src/components/blog';

describe('components/blog-list', function () {
  context('when there are no blogs to render', function () {
    beforeEach(function () {
      this.tree = sd.shallowRender(<Component />);
    });

    it('contains no blogs', function () {
      expect(this.tree.toString()).to.contain('No Blogs Present');
    });
  });

  context('when there is a single blog present', function () {
    beforeEach(function () {
      this.firstBlog = Map({ id: 'uuid1', title: 'Blog Title 1', content: 'Blog Content 1' })

      const blogs = Map({
        'uuid1': this.firstBlog
      });

      this.tree = sd.shallowRender(<Component blogs={blogs} />)
    });

    it('does not contain the no blogs text', function () {
      expect(this.tree.toString()).not.to.contain('No Blogs Present');
    });

    it('contains a single blog', function () {
      expect(this.tree.everySubTree('Blog').length).to.equal(1);
    });

    it('contains a single blog', function () {
      expect(this.tree.everySubTree('Blog')[0].props.blog).to.equal(this.firstBlog);
    });
  });

  context('when there are multiple blogs', function () {
    beforeEach(function () {
      this.firstBlog = Map({ id: 'uuid1', title: 'Blog Title 1', content: 'Blog Content 1' })
      this.secondBlog = Map({ id: 'uuid2', title: 'Blog Title 2', content: 'Blog Content 2' })
      this.thirdBlog = Map({ id: 'uuid3', title: 'Blog Title 3', content: 'Blog Content 3' })

      const blogs = Map({
        'uuid1': this.firstBlog,
        'uuid2': this.secondBlog,
        'uuid3': this.thirdBlog
      });

      this.tree = sd.shallowRender(<Component blogs={blogs} />)
    });

    it('does not contain the no blogs text', function () {
      expect(this.tree.toString()).not.to.contain('No Blogs Present');
    });

    it('contains all three blogs', function () {
      expect(this.tree.everySubTree('Blog').length).to.equal(3);
    });

    it('correctly sets the first blog', function () {
      expect(this.tree.everySubTree('Blog')[0].props.blog).to.equal(this.firstBlog);
    });

    it('correctly sets the second blog', function () {
      expect(this.tree.everySubTree('Blog')[1].props.blog).to.equal(this.secondBlog);
    });

    it('correctly sets the third blog', function () {
      expect(this.tree.everySubTree('Blog')[2].props.blog).to.equal(this.thirdBlog);
    });
  });
});
