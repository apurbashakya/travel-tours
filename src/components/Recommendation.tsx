import React from 'react';
import { feedbackData } from '@/app/StaticData';

const FeedbackSection = () => {
  const renderStars = (rating:any) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 15.27l4.16 2.18-1.08-4.72L18 8.24l-4.9-.42L10 3 7.9 7.82 3 8.24l3.92 4.48-1.08 4.72L10 15.27z"
            clipRule="evenodd"
          />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 mt-2">Real feedback from people like you</p>
        </div>

        <div className="space-y-8 flex flex-col md:flex-row md:gap-10">
          {feedbackData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gray-300"></div> {/* Placeholder for profile picture */}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <span className="text-sm text-gray-500">{item.location}</span>
                </div>
                <div className="flex items-center mb-4">{renderStars(item.rating)}</div>
                <p className="text-gray-600">{item.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
