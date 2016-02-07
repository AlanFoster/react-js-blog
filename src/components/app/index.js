import React from 'react';
import Navigation from '../navigation';

const App = React.createClass({
  render() {
    return (
      <div>
        <Navigation />
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default App;
