import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const query = new URLSearchParams(useLocation().search).get('q');

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Search Results for: <em>"{query}"</em></h2>
      {/* Placeholder - You can add filtered data, API call, etc. */}
      <p>Results will appear here based on the query.</p>
    </div>
  );
};

export default SearchResults;
