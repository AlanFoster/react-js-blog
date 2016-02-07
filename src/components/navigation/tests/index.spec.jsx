import { expect } from 'chai';
import React from 'react';
import sd from 'skin-deep';
import { List, Map } from 'immutable';
import Component from '../index;

describe('navigation', function () {
  beforeEach(function () {
    this.tree = sd.shallowRender(<Component />);
  });

  it('contains a link to home', function () {
    expect(this.tree.toString()).to.contain('Home');
  });

  it('contains a link to adding blogs', function () {
    expect(this.tree.toString()).to.contain('New Blog');
  });
});
