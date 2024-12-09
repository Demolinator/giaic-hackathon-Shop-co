import React from "react";

const DressStyleBrowser = () => {
  const styles = [
    { name: "Casual", image: "/images/casual.png" },
    { name: "Formal", image: "/images/formal.png" },
    { name: "Party", image: "/images/party.png" },
    { name: "Gym", image: "/images/gym.png" },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-[#F0F0F0] p-6 md:p-20 rounded-2xl">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-12">
          BROWSE BY DRESS STYLE
        </h2>
          {/* Cards Container */}
          <div className="flex flex-wrap gap-6">
            {/* First Row */}
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <div className="relative w-full md:w-[30%] h-96 rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow duration-300 aspect-square flex items-center justify-center">
                <img
                  src={styles[0].image}
                  alt={styles[0].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 flex p-8 items-start justify-start">
                  <h3 className="text-black text-lg md:text-4xl font-semibold">
                    {styles[0].name}
                  </h3>
                </div>
              </div>

              <div className="relative w-full md:w-[70%] h-96 rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow duration-300 aspect-square flex items-center justify-center">
                <img
                  src={styles[1].image}
                  alt={styles[1].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 flex p-8 items-start justify-start">
                  <h3 className="text-black text-lg md:text-4xl font-semibold">
                    {styles[1].name}
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-4">
              {/* Second Row */}
              <div className="relative w-full md:w-[70%] h-96 rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow duration-300 aspect-square flex items-center justify-center">
                <img
                  src={styles[2].image}
                  alt={styles[2].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 flex p-8 items-start justify-start">
                  <h3 className="text-black text-lg md:text-4xl font-semibold">
                    {styles[2].name}
                  </h3>
                </div>
              </div>

              <div className="relative w-full md:w-[30%] h-96 rounded-2xl overflow-hidden bg-white shadow hover:shadow-lg transition-shadow duration-300 aspect-square flex items-center justify-center">
                <img
                  src={styles[3].image}
                  alt={styles[3].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 flex p-8 items-start justify-start">
                  <h3 className="text-black text-lg md:text-4xl font-semibold">
                    {styles[3].name}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressStyleBrowser;
