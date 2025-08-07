import React from 'react';

const About = () => {
  return (
    <section>
      <div className="w-full min-h-[70vh] flex flex-col justify-center items-center text-center px-6 py-12 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About the Developer</h1>

        <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 text-gray-300 px-2 sm:px-0">
          Hey! Im <span className="font-semibold text-blue-400">AroshX3</span> — the proud creator of <span className="font-semibold text-green-400">CCV-ter</span>
        </p>

        <div className="max-w-3xl text-xs sm:text-sm md:text-base text-gray-400 space-y-4 px-2 sm:px-0">
          <p>
            Im currently a student of <span className="text-white font-medium">Class 7</span> — but dont let the grade fool you, Im already cooking React apps like a pro 
          </p>
          <p>
            Im learning full React development through a dedicated course to build cool, useful web apps — and CCV-ter is one of my first public projects.
          </p>
          <p>
            My goal is to keep leveling up my dev skills, help other students, and create more tools that make life easier (and math less annoying).
          </p>
        </div>

        <p className="mt-6 text-gray-500 text-sm">Made with computer, tea  and a dream .</p>
      </div>
    </section>
  );
};

export default About;
