import React from 'react';
import { Navbar } from '@/Components/Navbar';
import Image from 'next/image';

const Homepage = () => {
  return (
    <div className="h-screen bg-gray-50">
      <Navbar />


      <div className="flex flex-col md:flex-row items-center justify-between m-12">
       
        <div className="flex flex-col justify-center items-start space-y-6 max-w-[500px]">  
         
          <h1 className="text-black font-serif text-4xl md:text-5xl">
            IMPECCABLE CRAFTSMANSHIP AND  FINESSE
          </h1>
          
          
          <p className="text-xl md:text-2xl font-serif text-[#A29875] ">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>

        
          <button className="bg-[#A29875] font-serif text-xl md:text-2xl leading-[50px] w-[200px] h-[58px] rounded-[10px] p-[10px] mt-6 transform transition duration-300 hover:scale-105 hover:bg-[#8c7b5d]">
            Explore Now
          </button>
        </div>

       
        <div className="flex justify-center mt-8 md:mt-0">
          <div className="relative w-[442px] h-[611px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/figma.jpeg"  
              alt="Craftsmanship"
              width={300}  
              height={400}  
              className="rounded-tl-[100px] rounded-br-[100px] border-[1px]" // Rounded corners for the image
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
