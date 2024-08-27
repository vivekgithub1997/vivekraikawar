import React from 'react';
import Button from 'react-bootstrap/Button';
import { Typewriter } from 'react-simple-typewriter';

export const MainSection = () => {
  return (
    <main className="flex-1" id='home'>
      <section className="w-full h-auto py-8 md:py-6 lg:py-2">
        <div className="container px-4 md:px-6 mt-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-yellow-400 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter py-2">
                  <Typewriter
                    words={['Hello, I am Vivek Raikawar', 'FullStack Software Engineer', 'Coding Instructor']}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
                <p className="text-zinc-50 max-w-[600px] md:text-xl">
                  {/* Add some description here if needed */}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 mt-5">
                <Button variant="outline-secondary" className="w-full sm:w-auto">
                  <span className="text-zinc-50">Download Resume</span>
                </Button>
                <Button variant="outline-info" className="w-full sm:w-auto">
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Right side */}
            <div className="h-auto w-full max-w-[30rem] aspect-square rounded-full border-2 border-yellow-500 mt-4 overflow-hidden mx-auto">
              <img src="profile.png" alt="Profile Picture" className="object-cover w-full h-full" />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};
