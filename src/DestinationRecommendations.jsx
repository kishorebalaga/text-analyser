// DestinationRecommendations.js

import React from 'react';

const DestinationRecommendations = ({ destination }) => {
  // Example: Replace this with actual recommendations based on the selected destination
  const recommendations = [
    'Recommendation 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Recommendation 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Recommendation 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  ];

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-md text-center">
      <h2 className="text-2xl mb-4">Destination Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recommendations.map((recommendation, index) => (
          <div key={index} className="border p-4 rounded">
            <p className="text-lg">{recommendation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationRecommendations;
