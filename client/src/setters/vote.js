import Immutable from 'immutable';

export default function (blogState, blog) {
  const incrementVotes = blog => blog.update('votes', 0, n => n + 1);
  const id = Immutable.fromJS(blog).get('id');

  return blogState.update(id, incrementVotes);
}
