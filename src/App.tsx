import React from 'react';
import {
  Route,
  Routes
} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import MockPage from './common/MockPage/MockPage';

function App() {
  return (
    <>
      <Header />
      <Routes>

        <Route path="/" element={<MockPage text='Welcom to Klumo' />} />
        <Route path="/poster" element={<MockPage text='Poster' />} />
        <Route path="/canvas" element={<MockPage text='Canvas' />} />
        <Route path="/digital-download" element={<MockPage text='Digital Download' />} />
        <Route path="/gift-card" element={<MockPage text='Gift Card' />} />

        <Route path="/wish-list" element={<MockPage text='Wish List' />} />
        <Route path="/account" element={<MockPage text='Account' />} />
        <Route path="/cart" element={<MockPage text='Cart' />} />

      </Routes>
    </>
  );
}

export default App;
