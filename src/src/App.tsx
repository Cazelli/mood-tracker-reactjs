import React from 'react';
import './App.css';
import ActivityForm from './activities/ActivityForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActivityContextProvider from './activities/ActivityStore';

function App() {
  return (
    <div className="wrapper">
      <ActivityContextProvider>
        <ActivityForm></ActivityForm>
      </ActivityContextProvider>
    </div>
  );
}

export default App;
