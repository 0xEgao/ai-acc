import React from 'react';
import Marquee from "react-fast-marquee";

function HeroSection() {
    return (
        <div>
            <div className="w-screen min-h-screen fixed sm:flex sm:flex-col items-center justify-center px-4 sm:px-6 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/griddy.svg')] bg-cover opacity-20"></div>
                <div className="container mx-auto flex flex-col items-center gap-4 m-6 sm:m-16">
                    <div className="flex flex-wrap justify-center gap-4">
                        <img src="/spheron.png" alt="spheron logo" className="h-16 w-32 sm:h-20 sm:w-40" />
                        <img src="/genlayer.png" alt="genlayer logo" className="h-16 w-32 sm:h-20 sm:w-40" />
                        <img src="/light.svg" alt="light logo" className="h-16 w-32 sm:h-20 sm:w-40" />
                    </div>
                    <h1 className="font-bold bg-gradient-to-r text-black bg-clip-text text-3xl sm:text-3xl md:text-5xl">
                        presents
                    </h1>
                    <h1 className="font-bold text-transparent bg-gradient-to-r from-green-400 to-green-900 bg-clip-text text-3xl sm:text-3xl md:text-5xl">
                        ai/acceleration
                    </h1>
                    <br />
                    <button className="text-xs sm:text-sm bg-green-200 p-3 sm:p-4 rounded-xl">
                        Upcoming Events➤
                    </button>
                </div>

                {/* Infinite Scrolling Image Carousel */}
                <div className="w-full mt-6 sm:mt-8">
                    <Marquee gradient={false} speed={40} pauseOnHover={true}>
                        <img src="/1.jpeg" alt="Image 1" className="w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] object-cover mx-4 rounded-lg shadow-lg" />
                        <img src="/2.png" alt="Image 2" className="w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] object-cover mx-4 rounded-lg shadow-lg" />
                        <img src="/3.png" alt="Image 3" className="w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] object-cover mx-4 rounded-lg shadow-lg" />
                        <img src="/4.jpeg" alt="Image 4" className="w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] object-cover mx-4 rounded-lg shadow-lg" />
                        <img src="/5.jpg" alt="Image 5" className="w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] object-cover mx-4 rounded-lg shadow-lg" />
                        <img src="/6.jpg" alt="Image 6" className="w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] object-cover mx-4 rounded-lg shadow-lg" />
                        <img src="/7.png" alt="Image 7" className="w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] object-cover mx-4 rounded-lg shadow-lg" />
                        <img src="/8.png" alt="Image 8" className="w-[300px] h-[200px] sm:w-[400px] sm:h-[250px] object-cover mx-4 rounded-lg shadow-lg" />
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
