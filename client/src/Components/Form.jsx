import React from "react";

const Form = () => {
  return (
    <section className="py-16 px-4 sm:px-8" id="contact">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-10 text-transparent gradient2">
        Contact Me
      </h1>

      <form className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-md space-y-6 shadow-[#300CAB]">
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="p-3 rounded-lg bg-[#0f172a] text-white border border-purple-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-lg bg-[#0f172a] text-white border border-purple-500 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col">
          <label htmlFor="message" className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Enter your message here"
            className="p-3 rounded-lg bg-[#0f172a] text-white border border-purple-500 placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="cursor-pointer gradient3 border border-[#6b46c1] flex items-center px-6 py-3 rounded-lg font-semibold shadow-md hover:scale-105 transition-transform"
          >
            <span>Send Message</span><i className="bx bx-send ml-2"></i>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
