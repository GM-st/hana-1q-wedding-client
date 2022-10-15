import React, { useEffect } from "react";
import Image from "next/image";

const Header = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  });

  return (
    <>
      <header className="sticky top-0 z-50 shadow-lg py-3 text-gray-800 bg-white">
        <div className="container flex justify-between h-10 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#main-section"
            aria-label="Back to homepage"
            className="flex items-center p-2 no-underline"
          >
            <Image
              // className="object-cover object-center rounded"
              alt="hero"
              src="/hana-3d-logo.png"
              width="60%"
              height="80%"
            />
            <span className="ml-3 text-xl text-teal-600">하나 원큐 웨딩</span>
          </a>
          <nav className="items-stretch hidden space-x-3 md:flex">
            <a
              rel="noopener noreferrer"
              href="#main-section"
              className="flex items-center text-lg px-4 -mb-1 border-b-2 border-transparent text-teal-600 hover:border-teal-600 hover:text-teal-800 focus:border-teal-600 no-underline"
            >
              메인
            </a>
            <a
              rel="noopener noreferrer"
              href="#intro-section"
              className="flex items-center text-lg px-4 -mb-1 border-b-2 border-transparent text-teal-600 hover:border-teal-600 hover:text-teal-800 focus:border-teal-600 no-underline"
            >
              소개
            </a>
            <a
              rel="noopener noreferrer"
              href="#canvas-section"
              className="flex items-center text-lg px-4 -mb-1 border-b-2 border-transparent text-teal-600 hover:border-teal-600 hover:text-teal-800 focus:border-teal-600 no-underline"
            >
              자필편지
            </a>
            <a
              rel="noopener noreferrer"
              href="#viewer-section"
              className="flex items-center text-lg px-4 -mb-1 border-b-2 border-transparent text-teal-600 hover:border-teal-600 hover:text-teal-800 focus:border-teal-600 no-underline"
            >
              영상편지
            </a>
            <a
              rel="noopener noreferrer"
              href="https://localhost:8080"
              className="flex items-center text-lg px-4 -mb-1 border-b-2 border-transparent text-teal-600 hover:border-teal-600 hover:text-teal-800 focus:border-teal-600 no-underline"
            >
              서비스 이용하기
            </a>
          </nav>
          <button className="flex justify-end p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
