import React from 'react';
import './App.css';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <>
      <Layout />
    </>
  );
}

export default App;

// to do...
// - adapt content for high res screen width 
// - fix Footer social media icon positioning
// - move logos and images to an assets folder
// - move the har coded nav links out of the navlinks folder and pass as props
