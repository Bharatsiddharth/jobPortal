import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8 rounded-2xl shadow-lg overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="bg-blue-100 opacity-50 rounded-full w-96 h-96 absolute -top-10 -left-10 blur-3xl"></div>
            <div className="bg-blue-300 opacity-50 rounded-full w-80 h-80 absolute top-40 -right-20 blur-2xl"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-6xl font-extrabold text-center text-blue-600 tracking-tight leading-tight">
              About <span className="text-gray-800">Us</span>
            </h1>
            <p className="text-gray-700 text-lg text-center mt-4 leading-relaxed">
              We are committed to bridging the gap between talent and
              opportunities, fostering a space where individuals and
              organizations thrive together.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-10">
              {/* Section 1 */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-semibold text-blue-500 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Empower job seekers and recruiters by simplifying the
                  recruitment process through intuitive tools and innovative
                  features.
                </p>
              </div>
              {/* Image */}
              <div className="relative w-full max-w-md h-80">
                <Image
                  src={"https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                  alt="Our Mission"
                  fill
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-10">
              {/* Image */}
              <div className="relative w-full max-w-md h-80 order-2 md:order-1">
                <Image
                  src={"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                  alt="Our Team"
                  fill
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>
              {/* Section 2 */}
              <div className="flex-1 text-center md:text-right order-1 md:order-2">
                <h2 className="text-4xl font-semibold text-blue-500 mb-4">
                  Our Vision
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  To revolutionize the job market by fostering connections and
                  helping everyone achieve their goals in the most efficient way
                  possible.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <h3 className="text-4xl font-bold text-gray-800">
                Ready to take the next step?
              </h3>
              <p className="text-gray-600 mt-2">
                Join us on this journey and let us help you reach your full
                potential.
              </p>
              <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-transform transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
