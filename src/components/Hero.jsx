import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Peter
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Exploring code, creativity, and ideas.
            </p>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            This is where I build, learn, and share my projects.
            </p>
      </div>
    </section>
  );
};

export default Hero;
