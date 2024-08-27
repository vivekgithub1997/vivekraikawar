import React from 'react';

const Achievements = () => {
  return (
    <section className="py-8 px-4">
    <h2 className="text-3xl font-bold text-center text-zinc-50 mb-8 mt-10">Awards</h2>
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {[
          {
            imgSrc: "src/assets/instapat.jpg",
            description: "Instapat Award",
          },
          {
            imgSrc: "src/assets/achievers.jpg",
            description: "Achievers Award",
          },
        ].map((achievement, index) => (
          <div
            key={index}
            className="bg-zinc-800 text-zinc-50 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-yellow-500 hover:text-black font-semibold md:text-2xl w-full max-w-xs flex flex-col items-center"
          >
            <img
              src={achievement.imgSrc}
              alt={`Achievement ${index + 1}`}
              className="w-full h-auto object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <div className="p-4 flex flex-col items-center">
              <p className="text-sm text-center">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  

  );
}

export default Achievements;
