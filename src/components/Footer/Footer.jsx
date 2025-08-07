import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        <div>
          <h1 className="text-2xl font-bold mb-3">CCV-ter</h1>
          <p className="text-sm text-gray-400">
            Your ultimate currency converter.<br />
            Fast, simple & accurate.<br />
            Made with ❤️ by AroshX3.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/ccvter" className="hover:text-white transition">CCV-ter</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Connect</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Email: <a href="mailto:hello@cvter.com" className="hover:text-white transition">hello@cvter.com</a></li>
            <li>GitHub: <a href="https://github.com/AroshX3" target="_blank" rel="noreferrer" className="hover:text-white transition">@AroshX3</a></li>
            <li>Made in 🇧🇩 Bangladesh</li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <div className="text-center text-gray-500 text-sm select-none">
        &copy; {new Date().getFullYear()} CCV-ter. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
