import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-extrabold mb-8 text-blue-900">Contact</h2>
        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
  Have a project in mind or want to learn more about our IT &amp; AI services? Connect with us and let&apos;s build something great together.
</p>


        <div className="flex flex-wrap justify-center items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
          <a
            href="mailto:contact@radth.com"
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg font-semibold transition transform hover:scale-105 hover:shadow-xl"
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Email Us
          </a>
          <a
            href="tel:+13476696071"
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg font-semibold transition transform hover:scale-105 hover:shadow-xl"
          >
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            Call Us
          </a>
          <a
            href="https://www.facebook.com/radthbd"
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg font-semibold transition transform hover:scale-105 hover:shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="mr-2" />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/radthbd"
            className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg font-semibold transition transform hover:scale-105 hover:shadow-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
            Instagram
          </a>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
          <span className="block mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Email: <a href="mailto:contact@radth.com" className="text-blue-600 hover:underline">contact@radth.com</a>
          </span>
          <span>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            Phone: <a href="tel:+13476696071" className="text-blue-600 hover:underline">+1 (347) 669-6071</a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
