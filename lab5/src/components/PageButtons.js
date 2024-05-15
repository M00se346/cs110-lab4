import React, { useState } from 'react';

const PageSelector = () => {
  // State to track the selected page
  const [selectedPage, setSelectedPage] = useState(1);

  // Function to handle page selection
  const handlePageSelect = (pageNumber) => {
    setSelectedPage(pageNumber);
  };

  // Render content based on the selected page
  let content;
  if (selectedPage === 1) {
    content = <p>This is Page 1 content.</p>;
  } else if (selectedPage === 2) {
    content = <p>This is Page 2 content.</p>;
  } else if (selectedPage === 3) {
    content = <p>This is Page 3 content.</p>;
  }

  return (
    <div>
      {/* Buttons to select pages */}
      <button onClick={() => handlePageSelect(1)}>1</button>
      <button onClick={() => handlePageSelect(2)}>2</button>
      <button onClick={() => handlePageSelect(3)}>3</button>

      {/* Render content based on selected page */}
      {content}
    </div>
  );
};

export default PageSelector;
