import React, { useState } from 'react';
import './app.css';
import Layout from './layout/layout';

function App() {
  const [count, setCount] = useState(0);

  return <Layout />;
}

export default App;

