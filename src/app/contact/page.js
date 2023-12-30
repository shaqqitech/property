'use client';
import React, { useState } from 'react';
import { FiMail, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Form submitted successfully!');
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center px-20 py-10">
      <div className="w-4/8  sm:w-4/12 md:w-8/12 px-4 py-6 bg-gray-200 shadow-xl rounded-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 ${
                  formErrors.name ? 'border-red-500' : ''
                }`}
              />
              {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 ${
                  formErrors.email ? 'border-red-500' : ''
                }`}
              />
              {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className={`w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 ${
                formErrors.subject ? 'border-red-500' : ''
              }`}
            />
            {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Your Message"
              className={`w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 ${
                formErrors.message ? 'border-red-500' : ''
              }`}
            ></textarea>
            {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-600">Need help? Contact us at:</p>
          <div className="flex items-center justify-center mt-2">
            <FiMail className="text-blue-500 text-xl mr-2" />
            <p>example@email.com</p>
          </div>
          <div className="flex items-center justify-center mt-2">
            <FiPhone className="text-blue-500 text-xl mr-2" />
            <p>+1234567890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
