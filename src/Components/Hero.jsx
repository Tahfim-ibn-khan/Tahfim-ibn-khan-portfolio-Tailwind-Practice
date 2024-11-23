import React from "react";
import heroImage from "../assets/images/introduction.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "ReactJS Developer",
      "NodeJS Developer",
      "Machine Learning Enthusiast"
    ],
    loop: 0,
    typeSpeed:120,
    deleteSpeed:50
  });

  return (
    <div className="bg-black text-center text-white py-16 md:py-32" id="Hero">
      <img
        src={heroImage}
        alt="Hero image"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        This is{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-700">
          Tahfim Ibn Khan
        </span>
        , <span> {text}</span>
        <Cursor />
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-t from-yellow-100 to-purple-500 hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact me
        </button>
        <button className="bg-gradient-to-t from-pink-500 to-yellow-500 hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Resume
        </button>
      </div>
    </div>
  );
}

export default Hero;
