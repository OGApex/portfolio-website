import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-gradient-to-b from-gray-800 via-black to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/cbf02a15-262a-466e-8705-50c4017d3bc6"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            ></input>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 bg-blue-900 hover:bg-blue-600">
              Send email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
