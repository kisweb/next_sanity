import React from 'react';
import { useState } from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { name, email, subject, message } = values;

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/api/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-gray-100 h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
          Contact
        </h3>

        <div className="flex flex-col space-y-6 mt-24">
          <h4 className="text-3xl text-semibold text-center">
            I have got just what you need.{' '}
            <span className="decoration-[#F7AB0A]/50 underline ">
              Lets Talk
            </span>
          </h4>
          <div className="space-y-5">
            <div className="flex items-center space-x-3 justify-center">
              <PhoneIcon className="text-[#F7AB0A] h-8 w-8 animate-pulse" />
              <p>+221 77 554 41 91</p>
            </div>
            <div className="flex items-center space-x-3 justify-center">
              <EnvelopeIcon className="text-[#F7AB0A] h-8 w-8 animate-pulse" />
              <p>kisarrweb@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3 justify-center">
              <MapPinIcon className="text-[#F7AB0A] h-8 w-8 animate-pulse" />
              <p>Manguiline , Bignona</p>
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            className="flex flex-col space-y-2 w-fit mx-auto"
          >
            <div className="flex space-x-2">
              <input
                placeholder="Name"
                className="contactInput"
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
              <input
                placeholder="Email"
                className="contactInput"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <input
              className="contactInput"
              placeholder="Subject"
              type="text"
              name="subject"
              value={subject}
              onChange={handleChange}
            />
            <textarea
              placeholder="Message"
              className="contactInput"
              name="message"
              value={message}
              onChange={handleChange}
            />

            <button
              className="bg-[#F7AB0A] py-5 rounded-md text-black font-bold text-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
