import { expect } from 'chai';
import React from 'react';
import sd from 'skin-deep';
import { List, Map } from 'immutable';
import Component from 'src/components/page-not-found';

describe('components/page-not-found', function () {
  beforeEach(function () {
    this.tree = sd.shallowRender(<Component />);
  });

  it('contains page not found text', function () {
    expect(this.tree.toString()).to.contain('Page Not Found.');
  });
});
