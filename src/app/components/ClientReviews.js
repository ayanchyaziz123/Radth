import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper';

// ClientReviewsSection component with Swiper.js slider
const ClientReviewsSection = () => {
  const reviews = [
    {
      clientName: 'John Doe',
      review: 'The team at InnovatePI delivered an exceptional solution for our restaurant. The reservation system has streamlined our operations and significantly improved customer satisfaction.',
      image: 'images/john_doe.jpeg',
    },
    {
      clientName: 'Jane Smith',
      review: 'Working with InnovatePI was a fantastic experience. The mobile app they developed for us is user-friendly and has boosted our sales through effective loyalty programs.',
      image: 'images/jane_smith.jpeg',
    },
    {
      clientName: 'Mark Johnson',
      review: 'InnovatePI’s expertise in developing a blog platform has been invaluable. Our new blog is engaging, easy to manage, and has increased our online presence.',
      image: 'images/mark_johnson.jpeg',
    },
  ];

  return (
    <section id="reviews" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-blue-900">Client Reviews</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          modules={[Navigation]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.clientName}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900">{review.clientName}</h3>
                </div>
                <p className="text-gray-700">{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientReviewsSection;
