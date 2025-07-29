import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/ProfilePic.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans mt-6 md:mt-10 lg:mt-14"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-14">
        {/* Left Side */}
        <div className="md:w-[50%] text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Saurav Raj
          </h2>

          {/* Typing Effect */}
          <div className="inline-block whitespace-nowrap text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white mr-2">I am a</span>
            <ReactTypingEffect
              text={['Fullstack Developer']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
              displayTextRenderer={(text) => <span>{text}</span>}
            />
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            Final-year B.Tech IT student with strong skills in full-stack web development (MERN stack). Experienced in building responsive, user-friendly apps. Passionate about clean code, teamwork, and solving real-world problems. Eager to grow as a software developer.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-5">
            <a
              href="https://drive.google.com/file/d/1-NVF3Brjd4hMoqDRqv76qdXEbhCziiiU/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 overflow-hidden z-10 group"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
            >
              <span className="relative z-10">DOWNLOAD CV</span>
              <span className="absolute top-0 left-0 w-full h-full bg-[#8245ec] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0 rounded-full"></span>
            </a>

            <a
              href="#contact"
              className="relative inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 overflow-hidden z-10 group"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
            >
              <span className="relative z-10">HIRE ME</span>
              <span className="absolute top-0 left-0 w-full h-full bg-[#8245ec] opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0 rounded-full"></span>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-[50%] flex justify-center md:justify-center">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[24rem] md:h-[24rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Saurav Raj"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
