import React from 'react';

const reviews = [
  {
    name: 'John Doe',
    rating: 5,
    text: 'This service is amazing! I found exactly what I needed for my diet.',
  },
  {
    name: 'Jane Smith',
    rating: 5,
    text: 'I love the variety of foods available. Highly recommended!',
  },
  {
    name: 'Sam Wilson',
    rating: 4,
    text: 'A great resource for healthy eating. The recommendations are spot on.',
  },
];

const Reviews = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">What Our Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500">
                  {'★'.repeat(review.rating)}
                  {'☆'.repeat(5 - review.rating)}
                </div>
              </div>
              <p className="text-gray-300 mb-4">{review.text}</p>
              <p className="font-semibold text-white">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
