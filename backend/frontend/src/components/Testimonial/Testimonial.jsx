import React from 'react';
import { HiStar } from 'react-icons/hi';
import patientAvatar from '../../assets/images/patient-avatar.png';

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Shivaji the Boss',
      rating: 5,
      content: 'I have taken mental health services from them. They treat so well and they are providing the best medical services.',
    },
    {
      name: 'Charlie Chaplin',
      rating: 5,
      content: 'I have taken mental health services from them. They treat so well and they are providing the best medical services.',
    },
  ];

  return (
    <div className="mt-[30px] lg:mt-[55px]">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="py-[30px] px-5 rounded-3">
          <div className="flex items-center gap-[13px]">
            <img src={patientAvatar} alt="" />
            <div>
              <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                {testimonial.name}
              </h4>
              <div className="flex items-center gap-[2px]">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <HiStar key={index} className="text-yellowColor w-[18px] h-5" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            {testimonial.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
