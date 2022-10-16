import React from "react";
import Qrcode from "../../components/qrcode";
import Animation from "../../components/animation";
import Image from "next/image";

const About = () => {
  const appStoreURL =
    "https://static.toss.im/png-icons/timeline/applekorea.png";
  const playStoreURL =
    "https://static.toss.im/png-icons/timeline/googleplay.png";
    
  return (
    <div>
      <div class="flex flex-col items-center bg-white w-2/5 rounded-2xl shadow-2xl">
        <div className="m-10">
          <Qrcode />
        </div>
        <div className="flex flex-row">
          <div class="flex flex-row justify-center bg-black w-52 h-12 rounded-lg m-3 shadow-lg mb-10">
            <div>
              <a
                type="button"
                aria-disabled="false"
                target="_blank"
                href="https://itunes.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328?mt=8"
                rel="noreferrer noopener"
              >
                <Image
                  src={appStoreURL}
                  width="40"
                  height="40"
                  alt="app-store"
                />
              </a>
            </div>
            <div className="text-white">App Store</div>
          </div>
          <div class="flex flex-row justify-center bg-black w-52 h-12 rounded-lg m-3 shadow-lg">
            <div>
              <a
                type="button"
                aria-disabled="false"
                target="_blank"
                href="https://itunes.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328?mt=8"
                rel="noreferrer noopener"
              >
                <Image
                  src={playStoreURL}
                  width="40"
                  height="40"
                  alt="app-store"
                />
              </a>
            </div>
            <div className="text-white">Google Play</div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-4">
        <div className="items-center">
          <a
            href="#canvas-section"
            className="flex title-font font-medium items-center text-gray-900 md:mb-0"
          >
            <Animation width={100} height={100} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
