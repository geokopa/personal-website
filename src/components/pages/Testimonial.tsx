import React from "react";
import { TestimonialsDataSource } from "../../data/data";
import { TestimonialItem } from "../../types/types";

const Testimonials: React.FC = () => {
  // You can replace the data with your actual testimonials

  return (
    <div
      id="testimonials"
      className="w-full h-full bg-[#0a192f] text-gray-300 p-4"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col sm:justify-center w-full h-full sm:h-screen mb-10">
        <div className="mt-[30px] sm:mt-0">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-pink-600 py-4">
            Testimonials
          </p>
          <p className="py-8">// These are the technologies I've worked with</p>
        </div>
        {/* w-full grid grid-cols-3 sm:grid-cols-3 gap-2 py-8 */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:flex-col gap-6">
          {TestimonialsDataSource.map((testimonial: TestimonialItem) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="mb-4">
                <p className="text-gray-600 font-semibold text-sm sm:text-base">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-sm sm:text-base">
                  {testimonial.position}
                </p>
              </div>
              <p className="text-gray-800 text-xs sm:text-sm">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
