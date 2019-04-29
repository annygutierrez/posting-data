import React, { Component } from 'react';
// Technically only react-router-dom is required for web development.
// It wraps react-router  and therefore uses it as a dependency. 
// We don't need to install react-router  on our own for it to work. You can omit this installation step.
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
