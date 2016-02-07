import React from 'react';
import { Link } from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>Blogs</h1>
        <hr />
        <div>
          <Link to='/'>Home</Link>
          <Link to='/new'>New Blog</Link>
        </div>
        <hr />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default App;
