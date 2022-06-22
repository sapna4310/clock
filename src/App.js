import React, { useState } from 'react';

// React Router necessary imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Main Component Import
import Main from './Components/Main';

// Entry Component import
import Entry from './Components/Entry/Entry';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById('spinner');

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = 'none';
      setLoading(false);
    }, 1000);
  }
  return (
    !loading && (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/entry/*" element={<Entry />} />
        </Routes>
      </BrowserRouter>
    )
  );
}

export default App;
