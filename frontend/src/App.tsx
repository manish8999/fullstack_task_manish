import React, { Suspense, lazy } from 'react';
import './index.css';

const TaskList = lazy(() => import('./components/Tasks'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div className="spinner-container"><div className="spinner"></div></div>}>
        <TaskList />
      </Suspense>
    </div>
  );
}

export default App;
