import React from 'react';

function App() {
  return (
      <Router>
          <Route path="/" exact component={Index} />
      </Router>
      <h1>Test</h1>
  );
}

export default App;
