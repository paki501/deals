import React from "react";
import NavBar from "./NavBar";

export default function Contact() {
  return (
    <>
      <NavBar />

      <div className="min-h-screen flex items-center justify-center px-4 py-10">
        <div className="bg-cyan-100 bg-opacity-50 p-6 md:p-10 rounded-2xl shadow-md w-full max-w-5xl border border-blue-300">

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-center text-black">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mt-2 mb-6 text-sm md:text-base">
            Feel free to contact us and we will get back to you as soon as we can.
          </p>

          <hr className="mb-6 border-gray-200" />

          {/* Form */}
          <form className="space-y-6">
            {/* Inputs row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">Clinic Name</label>
                <input
                  type="text"
                  placeholder="Enter clinic name"
                  className="w-full px-4 py-3 rounded-full bg-neutral-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full bg-neutral-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                placeholder="Enter your message..."
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-neutral-50 border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-cyan-400 hover:bg-cyan-500 text-white font-semibold rounded-full transition w-full md:w-auto"
              >
                SUBMIT NOW
                SUBMIT NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
