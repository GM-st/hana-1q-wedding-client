import React from "react";
import Image from "next/image";
import Layout from "../components/layout";

const Main = () => {
  const appStoreURL =
    "https://static.toss.im/png-icons/timeline/applekorea.png";
  const playStoreURL =
    "https://static.toss.im/png-icons/timeline/googleplay.png";
  const videoObjectSrc = "videos/videoGate.mp4";

  return (
    <>
      <Layout>
        <div id="main-section" className="bg-gray-100">
          <div className="relative flex items-center justify-center h-screen overflow-hidden">
            <div className="relative z-30 p-5 text-white bg-opacity-50 rounded-xl mb-60 items-center">
              <h1 className="flex flex-row text-black text-4xl items-center justify-center text-center leading-tight sm:text-6xl md:text-6xl">
                하나 1Q 웨딩에서<br></br>결혼식 모든 절차를 한번에
              </h1>
              <div className="flex flex-col md:flex-row sm:flex-row lg:flex-row items-center justify-center mt-20">
                <div class="flex flex-row items-center justify-center bg-black w-52 h-12 rounded-lg m-3 shadow-lg mt-10 bg-opacity-80">
                  <div className="mr-2 mt-1">
                    <a
                      type="button"
                      aria-disabled="false"
                      target="_blank"
                      href="https://itunes.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328?mt=8"
                      rel="noreferrer noopener"
                    >
                      {/* <Image
                    src={appStoreURL}
                    width="30"
                    height="30"
                    alt="app-store"
                  /> */}
                    </a>
                  </div>
                  <div className="text-white">계좌내역 바로가기</div>
                </div>
              </div>
            </div>
            <video
              playsInline
              autoPlay
              muted
              loop
              className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-100"
            >
              <source src={videoObjectSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Main;
