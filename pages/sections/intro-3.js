import React from "react";
import Image from "next/image";

const Intro3 = () => {
  return (
    <div id="intro-section" className="bg-gray-100">
      <section class="text-gray-600 body-font mx-20">
        <div class=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="flex flex-row lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <div className="items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <Image
                  // className="object-cover object-center rounded"
                  alt="hero"
                  src="/iPhone12_Clay_Shadow.png"
                  width={600}
                  height={936}
                />
              </div>
            </div>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
              진심을 적는<div className="mt-2"></div>1Q Wedding
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro3;
